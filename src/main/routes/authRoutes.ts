import { Router } from 'express';
import { AuthController } from '../../infrastructure/controllers/AuthController';
const authRoutes = Router();

const controller = new AuthController();

authRoutes.post('/login', controller.store);

export default authRoutes;
