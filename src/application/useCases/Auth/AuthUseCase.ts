import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { AuthService } from '../../../domain/services/AuthService';
import { ITokenService } from '../../services/ITokenService';

export class AuthUseCase {
  constructor(
    private repository: IUserRepository,
    private authService: AuthService,
    private generateToken: ITokenService
  ) {}

  async execute(email: string, password: string) {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    const valid = this.authService.comparePassword(password, user.password);

    if (!valid) {
      throw new Error('Credentials not found');
    }

    const token = this.generateToken.generate({
      id: user.id,
      role: user.role,
    });

    return token;
  }
}
