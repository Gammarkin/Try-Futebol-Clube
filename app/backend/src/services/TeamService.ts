import Team from '../database/models/Team';

const getAll = async () =>
  Team.findAll();

export default { getAll };
