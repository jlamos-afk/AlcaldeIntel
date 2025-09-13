import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as userService from '../services/userService';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'No token provided' });
  const [, token] = auth.split(' ');
  try {
    const payload = jwt.verify(token, JWT_SECRET) as any;
    const user = await userService.getUserById(payload.userId);
    if (!user) return res.status(401).json({ message: 'Invalid token' });
    (req as any).user = user;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
