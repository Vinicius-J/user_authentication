import { Request, Response } from 'express';
import { makeFindAllUsersUseCase } from '../factories/Users/InJsonUserRepository/makeFindAllUsersUseCase';

export class HomeController {
  async index(req: Request, res: Response) {
    try {
      return res.status(200).json({ message: 'Home' });
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
