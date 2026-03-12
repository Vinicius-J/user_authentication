import { randomUUID } from 'crypto';

import { User } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { CreateUserDTO } from '../../dtos/User/CreateUserDTO';
import { ResultCreateUserDTO } from '../../dtos/User/ResultCreateUserDTO';
import { Email } from '../../../domain/valueObjects/Email';
import { UserFactory } from '../../factories/UserFactory';

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(body: CreateUserDTO): Promise<ResultCreateUserDTO> {
    const userExists = await this.repository.findByEmail(body.email);

    if (userExists) {
      throw new Error('User already exists');
    }

    // const email = Email.create(body.email);

    // const user = new User(randomUUID(), body.name, email, body.password);

    const user = UserFactory.create(body.name, body.email, body.password);

    await this.repository.save(user);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
