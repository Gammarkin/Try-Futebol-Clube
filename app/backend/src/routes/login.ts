import { Router } from 'express';
import validateLogin from '../middlewares/login';
import LoginController from '../controllers/login';

const router = Router();

router.post(
  '/',
  validateLogin,
  LoginController.postLogin,
);

router.get(
  '/validate',
  LoginController.getLogin,
);

export default router;
