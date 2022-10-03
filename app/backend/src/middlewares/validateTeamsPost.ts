import { Request, Response, NextFunction } from 'express';
import TeamService from '../services/TeamService';
import matchService from '../services/matchService';

export default async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const matches = await matchService.getAll();
  const biggestTeamId = matches.length;

  const { homeTeam, awayTeam } = req.body;

  const teamHome = TeamService.findById(homeTeam);
  const teamAway = TeamService.findById(awayTeam);

  const invalidHomeTeam = homeTeam >= biggestTeamId;
  const invalidTeamAway = awayTeam >= biggestTeamId;

  if (invalidHomeTeam
    || invalidTeamAway
    || !teamHome
    || !teamAway) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
};
