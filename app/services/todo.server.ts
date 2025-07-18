import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addTodo(contents: string) {
  return prisma.todolist.create({
    data: { contents },
  });
}

export async function getTodos() {
  return prisma.todolist.findMany();
}
