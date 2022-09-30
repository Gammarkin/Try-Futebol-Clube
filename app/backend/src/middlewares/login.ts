import { Request, Response, NextFunction } from 'express';

const validateEmail = (email = '') => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.?$/i;
  return regex.test(email);
};

const validatePassword = (password = '') =>
  password.length > 6;

export default (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  if (!isEmailValid || !isPasswordValid) {
    return res.status(400).json({ message: 'Invalid entries.' });
  }

  next();
};
