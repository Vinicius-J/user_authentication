import { Router } from 'express';
import { HomeController } from '../controllers/HomeController';
const homeRoutes = Router();

import { authenticate } from '../../infrastructure/middlewares/auth';

const controller = new HomeController();

homeRoutes.get('/', authenticate, controller.index);

export default homeRoutes;
