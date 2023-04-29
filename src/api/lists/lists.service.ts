import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllLists = (userId: string) => {
  console.log(userId);

  return prisma.list.findMany({
    where: {
      userId: { equals: userId },
    },
    include: { favs: true },
  });
};

export const getListById = (id: string) => {
  return prisma.list.findUnique({
    where: {
      id: id,
    },
    include: { favs: true },
  });
};

export const createList = (input: any) => {
  return prisma.list.create({
    data: {
      name: input.name,
      favs: {
        connect: input.favs.map((favId: string) => ({ id: favId })),
      },
      User: {
        connect: {
          id: input.userId,
        },
      },
    },
  });
};

export const updateList = (input: any) => {
  return prisma.list.update({
    where: {
      id: input.id,
    },
    data: {
      favs: {
        connect: input.favs.map((favId: string) => ({ id: favId })),
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
