import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllLists = () => {
  return prisma.list.findMany();
};

export const getListById = (id: string) => {
  return prisma.list.findUnique({
    where: {
      id: id,
    },
  });
};

export const createList = (input: any) => {
  return prisma.list.create({
    data: {
      name: input.name,
      favs: input.favs,
      User: {
        connect: {
          id: input.userId,
        },
      },
    },
  });
};

export const deleteList = (id: string) => {
  return prisma.list.delete({
    where: {
      id: id,
    },
  });
};
