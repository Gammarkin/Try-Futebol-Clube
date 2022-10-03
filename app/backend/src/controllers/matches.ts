import { Request, Response } from 'express';
import matchService from '../services/matchService';

const getMatches = async (_req: Request, res: Response) => {
  const matches = await matchService.getAll();

  return res.status(200).json(matches);
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

export default { getMatches, postMatch, postMatchInProgress };
