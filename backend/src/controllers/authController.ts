import { Request, Response } from 'express';
import * as authService from '../services/authService';

export async function register(req: Request, res: Response) {
  try {
    const user = await authService.register(req.body);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const tokens = await authService.login(req.body);
    res.json(tokens);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function refresh(req: Request, res: Response) {
  try {
    const tokens = await authService.refresh(req.body.refreshToken);
    res.json(tokens);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}
