import User from '../database/models/User';

const getUsers = async () =>
  User.findAll();

const findByEmail = async (email: string) =>
  User.findOne({ where: { email } });

export default {
  getUsers,
  findByEmail,
};
