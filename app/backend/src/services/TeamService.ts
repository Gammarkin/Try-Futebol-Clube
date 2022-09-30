import Team from '../database/models/Team';

const getAll = async () =>
  Team.findAll();

const findById = async (id: number) =>
  Team.findByPk(id);

export default { getAll, findById };
