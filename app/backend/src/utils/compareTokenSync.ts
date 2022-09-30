import { compareSync } from 'bcryptjs';

export default (password: string, hash:string) =>
  compareSync(password, hash);
