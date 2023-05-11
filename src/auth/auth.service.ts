import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findUser = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};
export const createUser = (input: any) => {
  return prisma.user.create({
    data: {
      email: input.email,
      password: input.password,
    },
  });
};
