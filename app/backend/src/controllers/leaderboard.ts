import { Request, Response } from 'express';
import leaderboardFormat from '../utils/leaderboardFormat';

const getLeaderboard = async (
  _req: Request,
  res: Response,
) => {
  const leaderboard = await leaderboardFormat();

  res.status(200).json(leaderboard);
};

export default {
  getLeaderboard,
};
