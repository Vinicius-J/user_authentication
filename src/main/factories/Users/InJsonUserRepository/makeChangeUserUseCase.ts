import { ChangeUserUseCase } from '../../../../application/useCases/Users/ChangeUserUseCase';
import { InJsonUserRepository } from '../../../../infrastructure/repositories/InJsonUserRepository';

export function makeChangeUserUseCase() {
  const repository = new InJsonUserRepository();
  return new ChangeUserUseCase(repository);
}
