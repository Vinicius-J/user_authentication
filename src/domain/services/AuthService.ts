/*
Domain Services são usados quando uma regra de negócio não pertence a uma única entidade
Exemplos clássicos: autenticação, cálculo de desconto, transferência bancária, verificação de disponibilidade
*/
import bcryptjs from 'bcryptjs';

export class AuthService {
  comparePassword(password: string, hashedPassword: string): boolean {
    const passwordVO = bcryptjs.compareSync(password, hashedPassword);
    return passwordVO;
  }
}
