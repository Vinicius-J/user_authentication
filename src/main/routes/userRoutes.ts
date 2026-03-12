import { Router } from 'express';
import { UserController } from '../controllers/UserController';
const userRoutes = Router();

const controller = new UserController();

userRoutes.get('/', controller.index);
userRoutes.post('/', controller.create);
userRoutes.put('/email/:id', controller.update);

export default userRoutes;
