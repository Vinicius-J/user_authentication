import { CreateUserUseCase } from '../../../../application/useCases/Users/CreateUserUseCase';
import { InJsonUserRepository } from '../../../../infrastructure/repositories/InJsonUserRepository';

export function makeCreateUserUseCase() {
  const repository = new InJsonUserRepository();
  return new CreateUserUseCase(repository);
}
