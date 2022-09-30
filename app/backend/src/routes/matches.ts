import { Router } from 'express';
import matchController from '../controllers/matches';

const router = Router();

router.get('/', matchController.getMatches);

export default router;
