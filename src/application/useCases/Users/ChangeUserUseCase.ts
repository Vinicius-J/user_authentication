import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { AuthService } from '../../../domain/services/AuthService';
import { CreateUserDTO } from '../../dtos/User/CreateUserDTO';
import { UserFactory } from '../../factories/UserFactory';

export class ChangeUserUseCase {
  constructor(
    private repository: IUserRepository,
    private authService: AuthService
  ) {}

  async execute(id: string, body: CreateUserDTO) {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    const emailExists = await this.repository.findByEmail(body.email);

    if (emailExists && body.email !== user.email) {
      throw new Error('User already exists');
    }

    const { name, email, password } = body;

    if (name) user.name = name;
    if (email) user.email = email;

    if (password) {
      const verify = this.authService.comparePassword(password, user.password);
      if (!verify) {
        const newPassword = UserFactory.uptadePassword(password);
        user.password = newPassword;
      }
    }

    await this.repository.update(id, user);

    return user;
  }
}
