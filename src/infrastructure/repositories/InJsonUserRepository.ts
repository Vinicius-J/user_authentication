import fs from 'fs/promises';
import path from 'path';

import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/IUserRepository';

const filePath = path.resolve(__dirname, '..', '..', '..', 'UserJsonRepositoy.json');

export class InJsonUserRepository implements IUserRepository {
  async save(user: User): Promise<void> {
    await this.initFile();
    const userRepo = await fs.readFile(filePath, 'utf8');
    const arrRepo: User[] = JSON.parse(userRepo);
    arrRepo.push(user);
    const newUserRepo = JSON.stringify(arrRepo, null, 2);
    return await fs.writeFile(filePath, newUserRepo, 'utf8');
  }

  async findMany(): Promise<User[] | undefined> {
    await this.initFile();
    const userRepo = await fs.readFile(filePath, 'utf8');
    const arrRepo: User[] = JSON.parse(userRepo);
    return arrRepo;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    await this.initFile();
    const userRepo = await fs.readFile(filePath, 'utf8');
    const arrRepo: User[] = JSON.parse(userRepo);
    const user = arrRepo.find(u => u.email === email);
    return user;
  }

  async findById(userId: string): Promise<User | undefined> {
    await this.initFile();
    const userRepo = await fs.readFile(filePath, 'utf8');
    const arrRepo: User[] = JSON.parse(userRepo);
    const user = arrRepo.find(u => u.id === userId);
    return user;
  }

  async initFile(): Promise<void> {
    try {
      return await fs.access(filePath);
    } catch (error) {
      return await fs.writeFile(filePath, '[]', 'utf8');
    }
  }

  async update(id: string, userUpdate: User): Promise<User | undefined> {
    await this.initFile();
    const userRepo = await fs.readFile(filePath, 'utf8');
    const arrRepo: User[] = JSON.parse(userRepo);
    const user = arrRepo.find(u => u.id === id);

    arrRepo.forEach((u, i) => {
      if (u.id === id) {
        arrRepo[i] = userUpdate;
      }
    });

    const newUserRepo = JSON.stringify(arrRepo, null, 2);
    await fs.writeFile(filePath, newUserRepo, 'utf8');

    return user;
  }

  async delete(id: string): Promise<User | undefined> {
    const userRepo = await fs.readFile(filePath, 'utf8');
    const arrRepo: User[] = JSON.parse(userRepo);

    const deletedUser = arrRepo.find(u => u.id === id);

    if (deletedUser) {
      const newArrRepo = arrRepo.filter(user => {
        return user.id !== deletedUser.id;
      });
      const newUserRepo = JSON.stringify(newArrRepo, null, 2);
      await fs.writeFile(filePath, newUserRepo, 'utf8');
    }

    return deletedUser;
  }
}
