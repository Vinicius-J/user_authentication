import { User } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';

export class FindAllUsersUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(): Promise<User[] | undefined> {
    const users = await this.repository.findMany();
    return users;
  }
}
