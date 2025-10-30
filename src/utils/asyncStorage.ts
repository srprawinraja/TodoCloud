import {Todo} from "../types/Todo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "@TodoList";

export const addTodoFromStorage = async (todo: Todo) => {
  const jsonTodo = JSON.stringify(todo);
  try {
    await AsyncStorage.setItem(todo.id, jsonTodo);
  } catch (error) {
    console.log("oops! unable to store the data",error.message);
  }
};

export const getAllTodoFromStorage = async ():Promise<Todo[]> => {
    const allIds = await AsyncStorage.getAllKeys();
    const allValue = []
    for(const id of allIds){
      try{
        const jsonTodo = await AsyncStorage.getItem(id)
        const todo = JSON.parse(jsonTodo);
        allValue.push(todo);
      } catch(error){
        console.log("oops! error caught when retriving all data", error.message);
      }
    }
    return allValue;
};

export const updateTodoFromStorage = async(id:string, todo:Todo) => {
  try{
    const jsonTodo = JSON.stringify(todo);
    await AsyncStorage.setItem(id, jsonTodo);
  } catch(error){
    console.log("oops error occurred while updating", error)
  }
}

export const getTodoFromStorage = async(id:string):Promise<Todo> => {
  try{
    const jsonTodo = await AsyncStorage.getItem(id)
    const todo = JSON.parse(jsonTodo)
    return todo
  } catch(error){
    console.log("oops! error caught when retriving data", error)
  }
}
export const deleteTodoFromStorage = async(id:string) => {
  try{
    await AsyncStorage.removeItem(id)
  } catch(error){
    console.log("oops! error caught when deleting data", error)
  }
}