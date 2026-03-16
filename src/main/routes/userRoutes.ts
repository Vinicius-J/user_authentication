import { Router } from 'express';
import { UserController } from '../../infrastructure/controllers/UserController';
import { authenticate } from '../../infrastructure/middlewares/authentication';
import { authorization } from '../../infrastructure/middlewares/authorization';
const userRoutes = Router();

const controller = new UserController();

userRoutes.get('/', authenticate, authorization('admin'), controller.index);
userRoutes.post('/', controller.store);
userRoutes.get('/:id', authenticate, controller.show);
userRoutes.put('/:id', authenticate, controller.update);
userRoutes.delete('/:id', authenticate, controller.delete);

export default userRoutes;
