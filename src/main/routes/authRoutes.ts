import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
const authRoutes = Router();

const controller = new AuthController();

authRoutes.post('/', controller.store);

export default authRoutes;
