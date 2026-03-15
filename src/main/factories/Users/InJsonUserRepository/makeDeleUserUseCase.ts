import { DeleUserUseCase } from '../../../../application/useCases/Users/DeleteUserUseCase';
import { InJsonUserRepository } from '../../../../infrastructure/repositories/InJsonUserRepository';

export function makeDeleUserUseCase() {
  const repository = new InJsonUserRepository();
  return new DeleUserUseCase(repository);
}
