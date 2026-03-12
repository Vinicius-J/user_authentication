import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authenticate } from '../../infrastructure/middlewares/authentication';
import { authorization } from '../../infrastructure/middlewares/authorization';
const userRoutes = Router();

const controller = new UserController();

userRoutes.get('/', controller.index);
userRoutes.get('/board', authenticate, authorization('admin'), controller.show);
userRoutes.put('/:id', controller.update);

export default userRoutes;
