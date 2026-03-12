import { Request, Response } from 'express';

export class LoginController {
  async index(req: Request, res: Response) {
    return res.status(200).json({ message: 'Login' });
  }

  async register(req: Request, res: Response) {
    try {
      return res.status(201).json({ message: 'Login' });
    } catch (err) {
      return res.status(400).json({ err });
    }
  }

  async login(req: Request, res: Response) {}

  async logout(req: Request, res: Response) {}
}
