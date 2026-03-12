import { Request, Response } from 'express';
import { makeFindAllUsersUseCase } from '../factories/Users/InJsonUserRepository/makeFindAllUsersUseCase';
import { makeCreateUserUseCase } from '../factories/Users/InJsonUserRepository/makeCreateUserUseCase';
import { makeChangeEmailUserUseCase } from '../factories/Users/InJsonUserRepository/makeChangeEmailUserUseCase';

export class UserController {
  async index(req: Request, res: Response) {
    try {
      const useCase = makeFindAllUsersUseCase();

      const users = await useCase.execute();

      if (users?.length) {
        return res.status(200).json(users);
      }

      return res.status(200).json({ message: 'User' });
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const useCase = makeCreateUserUseCase();

      const user = await useCase.execute(req.body);

      return res.status(201).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const useCase = makeChangeEmailUserUseCase();

      const id = req.params.id as string;

      const user = await useCase.execute(id, req.body.email);

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
