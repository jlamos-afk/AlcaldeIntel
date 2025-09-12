import { Request, Response } from 'express';
import * as userService from '../services/userService';

export async function getMe(req: Request, res: Response) {
  try {
    const userId = (req as any).userId as number;
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}
