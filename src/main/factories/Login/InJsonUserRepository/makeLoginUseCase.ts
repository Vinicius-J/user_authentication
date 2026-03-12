import { LoginUseCase } from '../../../../application/useCases/Login/LoginUseCase';
import { AuthService } from '../../../../domain/services/AuthService';
import { InJsonUserRepository } from '../../../../infrastructure/repositories/InJsonUserRepository';
import { GenerateToken } from '../../../../infrastructure/auth/jwt';

export function makeLoginUseCase() {
  const respository = new InJsonUserRepository();
  const authService = new AuthService();
  const generateToken = new GenerateToken();
  return new LoginUseCase(respository, authService, generateToken);
}
