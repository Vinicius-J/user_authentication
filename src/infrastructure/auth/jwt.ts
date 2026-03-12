import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { ITokenService } from '../../application/services/ITokenService';

export class GenerateToken implements ITokenService {
  generate(payload: object): string {
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });
  }

  verify(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  }
}
