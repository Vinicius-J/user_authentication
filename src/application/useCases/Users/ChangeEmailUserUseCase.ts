import { User } from '../../../domain/entities/User';
import { Email } from '../../../domain/valueObjects/Email';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';

export class ChangeEmailUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(id: string, newEmail: Email): Promise<User> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    if (user.email === newEmail) {
      throw new Error('Email already exist');
    }

    user.changeEmail(newEmail);

    await this.repository.save(user);

    return user;
  }
}
