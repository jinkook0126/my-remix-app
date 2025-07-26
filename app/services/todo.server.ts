import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addTodo(contents: string) {
  return prisma.todolist.create({
    data: { contents },
  });
}

export async function getTodos() {
  return prisma.todolist.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function deleteTodo(id: number) {
  return prisma.todolist.delete({
    where: { id },
  });
}

export async function updateTodo(id: number) {
  await prisma.$transaction(async (tx) => {
    const todo = await tx.todolist.findUnique({
      where: { id },
    });
    if (!todo) {
      throw new Error("Todo not found");
    }
    await tx.todolist.update({
      where: { id },
      data: { done: !todo.done, updatedAt: new Date() },
    });
  });
}
