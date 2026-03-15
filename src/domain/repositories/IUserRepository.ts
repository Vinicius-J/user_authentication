import { User } from '../entities/User';
export interface IUserRepository {
  save(user: User): Promise<void>;
  findMany(): Promise<User[] | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(userId: string): Promise<User | undefined>;
  update(id: string, user: User): Promise<User | undefined>;
  delete(id: string): Promise<User | undefined>;
}
