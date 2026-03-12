import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { CreateUserDTO } from '../../dtos/User/CreateUserDTO';
import { ResultCreateUserDTO } from '../../dtos/User/ResultCreateUserDTO';
import { UserFactory } from '../../factories/UserFactory';

export class LoginRegisterUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(body: CreateUserDTO): Promise<ResultCreateUserDTO> {
    const userExists = await this.repository.findByEmail(body.email);

    if (userExists) {
      throw new Error('User already exists');
    }

    // const email = Email.create(body.email);

    // const user = new User(randomUUID(), body.name, email, body.password);

    const user = UserFactory.create(body.name, body.lastname, body.email, body.password);

    await this.repository.save(user);

    return {
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}
