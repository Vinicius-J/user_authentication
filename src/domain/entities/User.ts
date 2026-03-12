import { Email } from '../valueObjects/Email';

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: Email,
    public password: string
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
  }

  getPassword() {
    return this.password;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail: Email) {
    if (newEmail === this.email) {
      throw new Error('Email must be different');
    }
    this.email = newEmail;
  }

  changePassword(newPassword: string) {
    if (newPassword === this.password) {
      throw new Error('Password must be different');
    }
  }
}
