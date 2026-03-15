/*
Factories são usadas para criar entidades complexas.
Isso evita lógica de criação espalhada.
*/
import bcryptjs from 'bcryptjs';
import { randomUUID } from 'crypto';
import { User } from '../../domain/entities/User';

export class UserFactory {
  static create(name: string, email: string, password: string): User {
    const salt = bcryptjs.genSaltSync();
    const passwordVO = bcryptjs.hashSync(password, salt);
    return new User(randomUUID(), name, email, passwordVO);
  }

  static uptadePassword(password: string) {
    const salt = bcryptjs.genSaltSync();
    const passwordVO = bcryptjs.hashSync(password, salt);
    return passwordVO;
  }
}
