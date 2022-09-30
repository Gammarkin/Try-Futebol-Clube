import { JwtPayload, SignOptions, sign } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

const JWT_OPTIONS: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '10d',
};

export default (jwtPayload: JwtPayload) => {
  if (!JWT_SECRET) throw new Error('JWT_SECRET not found');

  return sign(jwtPayload, JWT_SECRET, JWT_OPTIONS);
};
