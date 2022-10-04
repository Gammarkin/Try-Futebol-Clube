import { Router } from 'express';
import leaderboard from '../controllers/leaderboard';

const router = Router();

router.get('/home', leaderboard.getLeaderboard);
router.get('/away', leaderboard.getAwayLeaderboard);

export default router;
