/*
Factories são usadas para criar entidades complexas.
Isso evita lógica de criação espalhada.
*/

import { randomUUID } from 'crypto';
import { User } from '../../domain/entities/User';
import { Email } from '../../domain/valueObjects/Email';

export class UserFactory {
  static create(name: string, email: string, password: string): User {
    const emailVO = Email.create(email);

    return new User(randomUUID(), name, emailVO, password);
  }
}
