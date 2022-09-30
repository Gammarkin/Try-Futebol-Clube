import { Request, Response } from 'express';
import { compareSync } from 'bcryptjs';
import encriptToToken from '../utils/encript';
import UserService from '../services/UserService';

const postLogin = async (req:Request, res:Response) => {
  const { password, email } = req.body;

  const token = encriptToToken({ password, email });
  const user = await UserService.findByEmail(email);

  if (!user) {
    return res.status(400).json({ message: 'user not in DB' });
  }

  const tokenInDB = compareSync(password, user.password);

  if (!tokenInDB) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return res.status(200).json({ token });
};

export default {
  postLogin,
};
