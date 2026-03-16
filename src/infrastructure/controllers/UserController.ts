import { Request, Response } from 'express';
import { makeFindAllUsersUseCase } from '../factories/Users/InJsonUserRepository/makeFindAllUsersUseCase';
import { makeCreateUserUseCase } from '../factories/Users/InJsonUserRepository/makeCreateUserUseCase';
import { makeFindUserByIdUseCase } from '../factories/Users/InJsonUserRepository/makeFindUserByIdUseCase';
import { makeChangeUserUseCase } from '../factories/Users/InJsonUserRepository/makeChangeUserUseCase';
import { makeDeleUserUseCase } from '../factories/Users/InJsonUserRepository/makeDeleUserUseCase';

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

  async store(req: Request, res: Response) {
    try {
      const useCase = makeCreateUserUseCase();

      const user = await useCase.execute(req.body);

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const useCase = makeFindUserByIdUseCase();

      const user = await useCase.execute(id);

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const useCase = makeChangeUserUseCase();

      const user = await useCase.execute(id, req.body);

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const useCase = makeDeleUserUseCase();

      const user = await useCase.execute(id);

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
