import { InMemoryUserRepository } from '../../../infrastructure/repositories/InMemoryUserRepository';
import { CreateUserUseCase } from '../../../application/useCases/Users/CreateUserUseCase';

export function makeCreateUserUseCase() {
  const repository = new InMemoryUserRepository();
  return new CreateUserUseCase(repository);
}
