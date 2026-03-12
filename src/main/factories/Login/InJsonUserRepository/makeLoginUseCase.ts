import { LoginUseCase } from '../../../../application/useCases/Login/LoginUseCase';
import { AuthService } from '../../../../domain/services/AuthService';
import { InJsonUserRepository } from '../../../../infrastructure/repositories/InJsonUserRepository';

export function makeLoginUseCase() {
  const respository = new InJsonUserRepository();
  const authService = new AuthService();
  return new LoginUseCase(respository, authService);
}
