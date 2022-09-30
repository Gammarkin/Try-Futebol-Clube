import { Request, Response } from 'express';
import Team from '../services/TeamService';

const getTeams = async (
  _req: Request,
  res: Response,
) => {
  const teams = await Team.getAll();

  return res.status(200).json(teams);
};

export default { getTeams };
