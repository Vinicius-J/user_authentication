import { LoginRegisterUseCase } from '../../../../application/useCases/Login/LoginRegisterUseCase';
import { InJsonUserRepository } from '../../../../infrastructure/repositories/InJsonUserRepository';

export function makeLoginRegisterUseCase() {
  const repository = new InJsonUserRepository();
  return new LoginRegisterUseCase(repository);
}
