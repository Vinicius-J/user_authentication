import { CreateUserDTO } from '../../application/dtos/User/CreateUserDTO';
import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/IUserRepository';

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [
    new User('1', 'admin', 'admin001', 'admin@email.com', '123'),
    new User('2', 'user', 'user001', 'user@email.com', '123'),
    new User('3', 'user', 'user002', 'user@email.com', '123'),
    new User('4', 'user', 'user003', 'user@email.com', '123'),
    new User('5', 'user', 'user004', 'user@email.com', '123'),
    new User('6', 'user', 'user005', 'user@email.com', '123'),
  ];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findMany(): Promise<User[]> {
    return this.users;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(u => u.email === email);
    return user;
  }

  async findById(userId: string): Promise<User | undefined> {
    const user = this.users.find(u => u.id === userId);
    return user;
  }

  async update(user: CreateUserDTO): Promise<User> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
