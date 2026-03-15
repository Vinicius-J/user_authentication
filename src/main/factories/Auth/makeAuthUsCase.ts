import { AuthUseCase } from '../../../application/useCases/Auth/AuthUseCase';
import { AuthService } from '../../../domain/services/AuthService';
import { GenerateToken } from '../../../infrastructure/auth/jwt';
import { InJsonUserRepository } from '../../../infrastructure/repositories/InJsonUserRepository';

export function makeAuthUsCase() {
  const respository = new InJsonUserRepository();
  const authService = new AuthService();
  const generateToken = new GenerateToken();
  return new AuthUseCase(respository, authService, generateToken);
}
