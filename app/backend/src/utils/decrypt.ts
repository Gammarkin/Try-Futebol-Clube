import { decode } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export default (token: string): Record<string, string> => {
  if (!JWT_SECRET) throw new Error('JWT_SECRET not found');

  return decode(token) as { email: string };
};
