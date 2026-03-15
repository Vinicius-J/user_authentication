import { IUserRole } from '../repositories/IUserRole';

export class User {
  public createdAt: Date;
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public role: IUserRole = 'user'
  ) {
    if (!name) {
      throw new Error('Name cannot be empty');
    }
    if (!email) {
      throw new Error('Email cannot be empty');
    }
    if (!password) {
      throw new Error('Password cannot be empty');
    }
    this.createdAt = new Date();
  }

  getPassword() {
    return this.password;
  }

  getEmail() {
    return this.email;
  }

  changeName(newName: string) {
    if (newName === this.name) {
      throw new Error('Name must be different');
    }
    this.name = newName;
  }

  changeEmail(newEmail: string) {
    if (newEmail === this.email) {
      throw new Error('Email must be different');
    }
    this.email = newEmail;
  }

  changePassword(newPassword: string) {
    if (newPassword === this.password) {
      throw new Error('Password must be different');
    }
    this.password = newPassword;
  }
}
