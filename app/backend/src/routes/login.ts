import { Router } from 'express';
import validateLogin from '../middlewares/login';
import { getLogin, postLogin } from '../controllers/login';

const router = Router();

router.post(
  '/',
  validateLogin,
  postLogin,
);

router.get(
  '/validate',
  getLogin,
);

export default router;
