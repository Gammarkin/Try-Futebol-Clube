import Match from '../database/models/Match';

const getAll = async () =>
  Match.findAll();

export default { getAll };
