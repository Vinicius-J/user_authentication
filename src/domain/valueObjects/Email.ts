/*
Value Objects representam valores do domínio com regras próprias
Eles são: imutáveis, comparados por valor, não possuem identidade

Exemplos clássicos: Email, CPF, Money, Address, Password
*/

export class Email {
  private constructor(private readonly value: string) {}

  static create(email: string): Email {
    if (!email.includes('@')) {
      throw new Error('Invalid email');
    }

    return new Email(email);
  }

  getValue(): string {
    return this.value;
  }
}
