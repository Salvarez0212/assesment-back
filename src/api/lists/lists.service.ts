import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllLists = () => {
  return prisma.user.findMany();
};
