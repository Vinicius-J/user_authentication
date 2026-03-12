import { Router } from 'express';
import { LoginController } from '../controllers/LoginController';
const loginRoutes = Router();

const controller = new LoginController();

loginRoutes.get('/', controller.index);
loginRoutes.post('/register', controller.register);
loginRoutes.post('/login', controller.login);
loginRoutes.get('/logout', controller.logout);

export default loginRoutes;
