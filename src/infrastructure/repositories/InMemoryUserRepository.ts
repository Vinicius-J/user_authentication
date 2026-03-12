import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { Email } from '../../domain/valueObjects/Email';
import { UserMapper } from '../mappers/UserMapper';

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findMany(): Promise<User[]> {
    return this.users;
  }

  async findByEmail(email: Email): Promise<User | undefined> {
    const user = this.users.find(u => u.email === email);
    return user;
  }

  async findById(userId: string): Promise<User | undefined> {
    const user = this.users.find(u => u.id === userId);
    return user;

    // const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    // if (!result.rows.length) return null;
    // return UserMapper.toDomain(result.rows[0]);
  }
}
