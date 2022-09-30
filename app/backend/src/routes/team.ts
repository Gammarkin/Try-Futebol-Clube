import { Router } from 'express';
import TeamController from '../controllers/teams';

const router = Router();

router.get('/', TeamController.getTeams);
router.get('/:id', TeamController.getTeamById);

export default router;
