import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { AuthService } from '../../../domain/services/AuthService';

export class LoginUseCase {
  constructor(
    private repository: IUserRepository,
    private authService: AuthService
  ) {}

  async execute(email: string, password: string) {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    const valid = this.authService.comparePassword(password, user.password);

    if (!valid) {
      throw new Error('Invalid password');
    }

    return user;
  }
}
