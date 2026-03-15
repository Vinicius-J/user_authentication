import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { CreateUserDTO } from '../../dtos/User/CreateUserDTO';
import { UserFactory } from '../../factories/UserFactory';

export class ChangeUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(id: string, body: CreateUserDTO) {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    const { name, email, password } = body;

    const userUpdate = UserFactory.update(name, email, password);

    await this.repository.update(userUpdate);

    return user;
  }
}
