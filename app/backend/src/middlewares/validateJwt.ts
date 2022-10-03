import { decode } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export default (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = decode(token);

    if (!decoded) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
