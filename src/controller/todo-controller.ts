import { NextFunction, Request, Response } from "express";
import createError from "../utils/createError";
import * as todoService from "../service/todo-service";

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title } = req.body;

    if (!title || typeof title !== "string") {
      return createError("Incorrect title", 400);
    }

    await todoService.createTodo({ title });

    res.json({ messange: "Create todo" });

    // const todos = await todoService.getAlltodos()  เทคนิค

    // res.json({ todos });
  } catch (err) {
    next(err);
  }
};

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json({ todos });
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { todoId } = req.params;

    if (isNaN(Number(todoId))) {
      return createError("id should be numnber", 400);
    }

    await todoService.deleteTodo(Number(todoId));
    res.json({ message: `Delete todo id ${todoId}` });
  } catch (err) {
    next(err);
  }
};
