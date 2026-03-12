/*
Factories são usadas para criar entidades complexas.
Isso evita lógica de criação espalhada.
*/

import { randomUUID } from 'crypto';
import { User } from '../../domain/entities/User';

export class UserFactory {
  static create(name: string, lastname: string, email: string, password: string): User {
    return new User(randomUUID(), name, lastname, email, password);
  }
}
