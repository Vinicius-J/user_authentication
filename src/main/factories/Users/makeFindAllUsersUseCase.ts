import { FindAllUsersUseCase } from '../../../application/useCases/Users/FindAllUsersUseCase';
import { InMemoryUserRepository } from '../../../infrastructure/repositories/InMemoryUserRepository';

export function makeFindAllUsersUseCase() {
  const repository = new InMemoryUserRepository();
  return new FindAllUsersUseCase(repository);
}
