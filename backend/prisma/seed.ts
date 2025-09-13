import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('123456', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@demo.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@demo.com',
      password,
      role: 'admin'
    }
  });

  await prisma.report.createMany({
    data: [
      {
        title: 'Fallen tree',
        description: 'Tree blocking the main road',
        status: 'open',
        userId: admin.id,
      },
      {
        title: 'Streetlight out',
        description: 'Streetlight not working in 5th Ave',
        status: 'in_progress',
        userId: admin.id,
      },
      {
        title: 'Pothole',
        description: 'Large pothole on Elm St',
        status: 'resolved',
        userId: admin.id,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
