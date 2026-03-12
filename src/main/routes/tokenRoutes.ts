import { Router } from 'express';
import { TokenController } from '../controllers/TokenController';
const tokenRoutes = Router();

const controller = new TokenController();

tokenRoutes.post('/', controller.store);

export default tokenRoutes;
