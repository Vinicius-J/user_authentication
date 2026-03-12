export interface ITokenService {
  generate(payload: object): string;
  verify(token: string): any;
}
