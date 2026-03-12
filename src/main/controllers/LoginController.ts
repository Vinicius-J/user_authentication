import { Request, Response } from 'express';
import { makeLoginUseCase } from '../factories/Login/InJsonUserRepository/makeLoginUseCase';
import { makeLoginRegisterUseCase } from '../factories/Login/InJsonUserRepository/makeLoginRegisterUseCase';

export class LoginController {
  async index(req: Request, res: Response) {
    return res.status(200).json({ message: 'Login' });
  }

  async register(req: Request, res: Response) {
    try {
      const useCase = makeLoginRegisterUseCase();

      const user = await useCase.execute(req.body);

      return res.status(201).json(user);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const useCase = makeLoginUseCase();

      const { email, password } = req.body;

      const login = await useCase.execute(email, password);

      return res.status(201).json(login);
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
