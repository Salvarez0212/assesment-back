import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findUser = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};
