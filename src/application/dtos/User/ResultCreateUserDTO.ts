import { Email } from '../../../domain/valueObjects/Email';

export interface ResultCreateUserDTO {
  id: string;
  name: string;
  email: Email;
}
