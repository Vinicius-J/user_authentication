import { ChangeEmailUserUseCase } from '../../../../application/useCases/Users/ChangeEmailUserUseCase';
import { InMemoryUserRepository } from '../../../../infrastructure/repositories/InMemoryUserRepository';

export function makeChangeEmailUserUseCase() {
  const repository = new InMemoryUserRepository();
  return new ChangeEmailUserUseCase(repository);
}
