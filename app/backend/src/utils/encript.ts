import { SignOptions, sign } from 'jsonwebtoken';
import 'dotenv/config';

const { JWT_SECRET = 'jwt_secret' } = process.env;

const JWT_OPTIONS: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '10d',
};

export default (jwtPayload: Record<string, string>) => {
  if (!JWT_SECRET) throw new Error('JWT_SECRET not found');

  return sign(jwtPayload, JWT_SECRET, JWT_OPTIONS);
};
