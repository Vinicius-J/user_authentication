import { Request, Response } from 'express';

import { InJsonUserRepository } from '../../infrastructure/repositories/InJsonUserRepository';
import { CreateTokenUseCase } from '../../application/useCases/Token/CreateTokenUseCase';
import { AuthService } from '../../domain/services/AuthService';

export class TokenController {
  async store(req: Request, res: Response) {
    try {
      const repository = new InJsonUserRepository();
      const authService = new AuthService();

      const useCase = new CreateTokenUseCase(repository, authService);

      const { email, password } = req.body;

      const token = await useCase.execute(email, password);

      return res.status(200).json({ token });
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ error: err.message });
    }
  }
}
