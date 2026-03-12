import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { Email } from '../../domain/valueObjects/Email';
import { UserMapper } from '../mappers/UserMapper';

export class InMemoryJsonUserRepository implements IUserRepository {
  save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findMany(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: Email): Promise<User | undefined> {
    throw new Error('Method not implemented.');
  }
  findById(userId: string): Promise<User | undefined> {
    throw new Error('Method not implemented.');
  }
}
