import { Request, Response } from 'express';
import Team from '../services/TeamService';

const getTeams = async (
  _req: Request,
  res: Response,
) => {
  const teams = await Team.getAll();

  return res.status(200).json(teams);
};

const getTeamById = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;
  const team = await Team.findById(+id);

  return res.status(200).json(team);
};

export default { getTeams, getTeamById };
