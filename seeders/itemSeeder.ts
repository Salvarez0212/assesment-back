import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const seedItem = async (prisma: PrismaClient): Promise<void> => {
  const items = [];

  for (let i = 0; i < 20; i++) {
    const item = {
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      link: `example${i}.com`,
    };

    items.push(item);
  }

  await prisma.fav.createMany({
    data: items,
  });

  console.log("Items created successfully");
};

export default seedItem;
