import User from '../database/models/User';

export const getUsers = async () =>
  User.findAll();

export const findByEmail = async (email: string) =>
  User.findOne({ where: { email } });

export default {
  getUsers,
  findByEmail,
};
