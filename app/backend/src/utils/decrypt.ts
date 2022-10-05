import { decode } from 'jsonwebtoken';

export default (token: string): Record<string, string> => {

  return decode(token) as { email: string };
};
