import { Request, Response } from 'express';
import leaderboardFormat from '../utils/leaderboardFormat';
import leaderboardAway from '../utils/leaderboardAway';
import leaderboardPlain from '../utils/leaderboard';

const getLeaderboard = async (
  _req: Request,
  res: Response,
) => {
  const leaderboard = await leaderboardFormat();

  res.status(200).json(leaderboard);
};

const getAwayLeaderboard = async (
  _req: Request,
  res: Response,
) => {
  const leaderboard = await leaderboardAway();

  res.status(200).json(leaderboard);
};

const getPlainLeaderboard = async (
  _req: Request,
  res: Response,
) => {
  const leaderboard = await leaderboardPlain();

  res.status(200).json(leaderboard);
};

export default {
  getLeaderboard,
  getAwayLeaderboard,
  getPlainLeaderboard,
};
