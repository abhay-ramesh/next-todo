// create API to get todo list and create todo depending on the request

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method, body } = req;
  console.log("method: ", method, "body: ", body);

  if (method === "GET") {
    const todos = await getTodos();
    res.status(200).json(todos);
  } else if (method === "POST") {
    const newTodo = await createTodo(body);
    res.status(201).json(newTodo);
  } else if (method === "DELETE") {
    const { ida } = body;
    await prisma.tasks.delete({ where: { ida } });
    res.status(204).end();
  } else if (method === "PUT") {
    const { ida, done } = body;
    const updatedTodo = await updateTodo(ida, done);
    res.status(200).json(updatedTodo);
  }
}

async function getTodos() {
  const todos = await prisma.tasks.findMany();
  return todos;
}

async function createTodo(todo) {
  const newTodo = await prisma.tasks.create({
    data: {
      ida: todo.ida,
      title: todo.title,
      completed: false,
    },
  });
  return newTodo;
}

async function updateTodo(ida, done) {
  const updatedTodo = await prisma.tasks.update({
    where: { ida },
    data: { completed: done },
  });
  return updatedTodo;
}

prisma.$disconnect();
