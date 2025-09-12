import { Router } from 'express';
import { getMe } from '../controllers/userController';
import { verifyToken } from '../middleware/authMiddleware';

const router = Router();

router.get('/me', verifyToken, getMe);

export default router;
