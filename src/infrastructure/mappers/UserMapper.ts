/*
Mapper converte entre:
Entity ↔ Database
Entity ↔ DTO
*/

import { User } from '../../domain/entities/User';

export class UserMapper {
  // static toDomain(row: any): User {
  //   return new User(row.id, row.name, Email.create(row.email));
  // }

  static toPersistence(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.getEmail(),
    };
  }
}
