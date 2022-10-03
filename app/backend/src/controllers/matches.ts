import { NextFunction, Request, Response } from 'express';
import matchService from '../services/matchService';

const getMatches = async (_req: Request, res: Response) => {
  const matches = await matchService.getAll();

  return res.status(200).json(matches);
};

const getMatchesWithQuery = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { inProgress = '' } = req.query;

  if (inProgress !== 'true' && inProgress !== 'false') {
    return next();
  }

  if (inProgress) {
    const boolInProgress = JSON.parse(inProgress as string);

    const matches = await matchService.getMatchesWithQuery(boolInProgress);

    return res.status(200).json(matches);
  }

  next();
};

const postMatch = async (req: Request, res: Response) => {
  const { body } = req;

  const match = await matchService.newMatch(body);

  return res.status(201).json(match);
};

const postMatchInProgress = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;

  await matchService.updateInProgress(Number(id));

  return res.status(200).json({ message: 'Finished' });
};

const patchMatchesGoals = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;
  const { body } = req;

  await matchService.updateScore(Number(id), body);

  return res.status(200).json({ message: 'Updated' });
};

export default {
  getMatchesWithQuery,
  getMatches,
  postMatch,
  postMatchInProgress,
  patchMatchesGoals };
