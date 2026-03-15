import { FindUserByIdUseCase } from '../../../../application/useCases/Users/FindUserByIdUseCase';
import { InJsonUserRepository } from '../../../../infrastructure/repositories/InJsonUserRepository';

export function makeFindUserByIdUseCase() {
  const repository = new InJsonUserRepository();
  return new FindUserByIdUseCase(repository);
}
