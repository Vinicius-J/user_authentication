import { ChangeEmailUserUseCase } from '../../../../application/useCases/Users/ChangeEmailUserUseCase';
import { InJsonUserRepository } from '../../../../infrastructure/repositories/InJsonUserRepository';

export function makeChangeEmailUserUseCase() {
  const repository = new InJsonUserRepository();
  return new ChangeEmailUserUseCase(repository);
}
