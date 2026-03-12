import { LoginRegisterUseCase } from '../../../../application/useCases/Login/LoginRegisterUseCase';
import { InMemoryUserRepository } from '../../../../infrastructure/repositories/InMemoryUserRepository';

export function makeCreateUserUseCase() {
  const repository = new InMemoryUserRepository();
  return new LoginRegisterUseCase(repository);
}
