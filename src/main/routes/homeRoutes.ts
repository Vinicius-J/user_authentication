import { Router } from 'express';
import { HomeController } from '../../infrastructure/controllers/HomeController';
const homeRoutes = Router();

const controller = new HomeController();

homeRoutes.get('/', controller.index);

export default homeRoutes;
