import { Request, Response } from 'express';
import { makeAuthUsCase } from '../factories/Auth/makeAuthUseCase';

export class AuthController {
  async store(req: Request, res: Response) {
    try {
      const useCase = makeAuthUsCase();
      const token = await useCase.execute(req.body.email, req.body.password);
      return res.status(200).json({ token });
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
