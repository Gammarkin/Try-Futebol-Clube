import { Request, Response } from 'express';
import { compareSync } from 'bcryptjs';
import decrypt from '../utils/decrypt';
import encriptToToken from '../utils/encript';
import { findByEmail } from '../services/UserService';

export const postLogin = async (req:Request, res:Response) => {
  const { password, email } = req.body;

  const token = encriptToToken({ email });
  const user = await findByEmail(email);

  if (!user) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  const tokenInDB = compareSync(password, user.password);

  if (!tokenInDB) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return res.status(200).json({ token });
};

export const getLogin = async (req:Request, res:Response) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'missing authorization on headers' });

  const { email } = decrypt(authorization);

  if (!email) return res.status(401).json({ message: 'Unauthorized' });

  const role = await findByEmail(email);

  return res.status(200).json({ role: role?.role });
};

export default {
  postLogin,
  getLogin,
};
