import { IUserRepository } from '../../../domain/repositories/IUserRepository';

export class FindUserByIdUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(id: string) {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
