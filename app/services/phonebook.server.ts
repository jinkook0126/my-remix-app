import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPhonebook = async (data: {
  name: string;
  phone: string;
}) => {
  return prisma.phonebook.create({
    data,
  });
};

export const getPhonebook = async () => {
  return prisma.phonebook.findMany();
};

export const getPhonebookById = async (id: number) => {
  return prisma.phonebook.findUnique({
    where: { id },
  });
};

export const updatePhonebook = async (
  id: number,
  data: {
    name: string;
    phone: string;
  }
) => {
  return prisma.phonebook.update({
    where: { id },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
};

export const deletePhonebook = async (id: number) => {
  console.log(id);
  return prisma.phonebook.delete({
    where: { id },
  });
};
