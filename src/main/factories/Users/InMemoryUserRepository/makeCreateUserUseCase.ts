import { CreateUserUseCase } from '../../../../application/useCases/Users/CreateUserUseCase';
import { InMemoryUserRepository } from '../../../../infrastructure/repositories/InMemoryUserRepository';

export function makeCreateUserUseCase() {
  const repository = new InMemoryUserRepository();
  return new CreateUserUseCase(repository);
}
