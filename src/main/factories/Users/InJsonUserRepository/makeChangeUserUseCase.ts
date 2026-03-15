import { ChangeUserUseCase } from '../../../../application/useCases/Users/ChangeUserUseCase';
import { AuthService } from '../../../../domain/services/AuthService';
import { InJsonUserRepository } from '../../../../infrastructure/repositories/InJsonUserRepository';

export function makeChangeUserUseCase() {
  const repository = new InJsonUserRepository();
  const authService = new AuthService();
  return new ChangeUserUseCase(repository, authService);
}
