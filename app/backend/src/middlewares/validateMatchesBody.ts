import { Request, Response, NextFunction } from 'express';

export default (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    homeTeam, awayTeam,
    homeTeamGoals, awayTeamGoals,
    inProgress } = req.body;

  if (!homeTeam || !awayTeam
      || !homeTeamGoals || !awayTeamGoals
      || !inProgress) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  next();
};
