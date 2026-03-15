/*
Factories são usadas para criar entidades complexas.
Isso evita lógica de criação espalhada.
*/
import bcryptjs from 'bcryptjs';
import { randomUUID } from 'crypto';
import { User } from '../../domain/entities/User';
import { CreateUserDTO } from '../dtos/User/CreateUserDTO';

export class UserFactory {
  static create(name: string, email: string, password: string): User {
    const salt = bcryptjs.genSaltSync();
    const passwordVO = bcryptjs.hashSync(password, salt);
    return new User(randomUUID(), 'user', name, email, passwordVO);
  }

  static update(name: string, email: string, passwordNoHash: string): CreateUserDTO {
    const salt = bcryptjs.genSaltSync();
    const password = bcryptjs.hashSync(passwordNoHash, salt);
    return { name, email, password };
  }
}
