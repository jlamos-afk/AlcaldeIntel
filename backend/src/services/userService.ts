import { prisma } from '../prisma/client';

export function getUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, role: true }
  });
}
