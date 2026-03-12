import { User } from '../entities/User';
import { Email } from '../valueObjects/Email';
export interface IUserRepository {
  save(user: User): Promise<void>;
  findMany(): Promise<User[]>;
  findByEmail(email: Email): Promise<User | undefined>;
  findById(userId: string): Promise<User | undefined>;
}
