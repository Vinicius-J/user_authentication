import { IUserRepository } from '../../../domain/repositories/IUserRepository';

export class DeleUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(id: string) {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    await this.repository.delete(id);

    return user;
  }
}
