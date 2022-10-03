import { Router } from 'express';

import matchController from '../controllers/matches';
import validateJwt from '../middlewares/validateJwt';
import validateSameTeamMatches from '../middlewares/validateSameTeamMatches';
import validateTeamsPost from '../middlewares/validateTeamsPost';

const router = Router();

router.get('/', matchController.getMatches);

router.patch(
  '/:id',
  matchController.patchMatchesGoals,
);

router.patch(
  '/:id/finish',
  matchController.postMatchInProgress,
);

router.post(
  '/',
  validateJwt,
  validateSameTeamMatches,
  validateTeamsPost,
  matchController.postMatch,
);

export default router;
