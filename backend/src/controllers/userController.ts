import { Request, Response } from 'express';

export async function getMe(req: Request, res: Response) {
  try {
    const user = (req as any).user;
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}
