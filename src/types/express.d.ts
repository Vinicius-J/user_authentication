import { IUserRole } from '../domain/repositories/IUserRole';

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; role: IUserRole };
    }
  }
}

export {};
