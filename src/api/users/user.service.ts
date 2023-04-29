import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = () => {
  return prisma.user.findMany();
};

export const createUser = (input: any) => {
  return prisma.user.create({
    data: {
      email: input.email,
      password: input.password,
    },
  });
};
