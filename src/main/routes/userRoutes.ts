import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authenticate } from '../../infrastructure/middlewares/authentication';
import { authorization } from '../../infrastructure/middlewares/authorization';
const userRoutes = Router();

const controller = new UserController();

// userRoutes.get('/', authenticate, authorization('admin'), controller.index);
userRoutes.get('/', controller.index);
userRoutes.post('/', controller.store);
userRoutes.get('/:id', controller.show);
userRoutes.put('/:id', controller.update);
userRoutes.delete('/:id', controller.delete);

/*
index -> lista todos usuários -> GET
show -> mostra um usuário -> GET
store / create -> cria um novo usuário -> POST
update -> atualiza um usuário -> PATCH ou PUT
delete -> apaga um usuário -> DELETE
*/

export default userRoutes;
