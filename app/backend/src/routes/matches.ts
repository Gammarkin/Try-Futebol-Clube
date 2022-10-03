import { Router } from 'express';

import validateMatchesBody from '../middlewares/validateMatchesBody';
import matchController from '../controllers/matches';
import validateJwt from '../middlewares/validateJwt';

const router = Router();

router.get('/', matchController.getMatches);

router.patch(
  '/:id/finish',
  matchController.postMatchInProgress,
);

router.post(
  '/',
  validateJwt,
  validateMatchesBody,
  matchController.postMatch,
);

export default router;
