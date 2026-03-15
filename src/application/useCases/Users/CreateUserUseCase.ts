import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { CreateUserDTO } from '../../dtos/User/CreateUserDTO';
import { UserFactory } from '../../factories/UserFactory';

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(body: CreateUserDTO) {
    const userExists = await this.repository.findByEmail(body.email);

    if (userExists) {
      throw new Error('User already exists');
    }

    const user = UserFactory.create(body.name, body.email, body.password);

    await this.repository.save(user);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}
