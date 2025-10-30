import { useEffect, useRef, useState } from "react";
import uuid from "react-native-uuid";
import {Todo} from "../types/Todo";
import { addTodoFromStorage, getTodoFromStorage, updateTodoFromStorage, deleteTodoFromStorage, getAllTodoFromStorage } from "../utils/asyncStorage";


export const addTodo = async (name: string):Promise<Todo[]> => {
    if (name.length >= 1) {
      const newTodo: Todo = {
        id: uuid.v4(),
        userId:"123",
        todoName: name,
        todoStatus: false,
        createdAt:Date.now.toString()
      };
      await addTodoFromStorage(newTodo);
    }
    return await getAllTodoFromStorage();
};

export const changeStatusTodo = async (id: string):Promise<Todo[]> => {
    const todo: Todo = await getTodoFromStorage(id)
    todo.todoStatus = !todo.todoStatus
    await updateTodoFromStorage(id, todo);
    return await getAllTodos();
};

export const deleteTodo = async (id: string):Promise<Todo[]> => {
  await deleteTodoFromStorage(id)
  return await getAllTodoFromStorage();
};

export async function getAllTodos(): Promise<Todo[]> {
  return await getAllTodoFromStorage();
}

 
