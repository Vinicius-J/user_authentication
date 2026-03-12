import { User } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';

export class ChangePasswordUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(id: string, password: string): Promise<User> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    user.changePassword(password);

    await this.repository.save(user);

    return user;
  }
}
