import { FindAllUsersUseCase } from '../../../../application/useCases/Users/FindAllUsersUseCase';
import { InJsonUserRepository } from '../../../../infrastructure/repositories/InJsonUserRepository';

export function makeFindAllUsersUseCase() {
  const repository = new InJsonUserRepository();
  return new FindAllUsersUseCase(repository);
}
