import { PrismaClient } from "@prisma/client";
import seedItem from "./itemSeeder";

const prisma = new PrismaClient();

const seeders = [seedItem];

const seed = async () => {
  for (const seeder of seeders) {
    await seeder(prisma);
  }
};

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
