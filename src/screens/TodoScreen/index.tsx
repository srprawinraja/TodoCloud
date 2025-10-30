import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

import styles from "./styleSheet.style";
import TodoComponent from "../../components/TodoComponent";
import { useEffect, useState } from "react";
import { addTodo, changeStatusTodo, deleteTodo, getAllTodos } from "../../services/todoService";
import {Todo} from "../../types/Todo";
import { getAllTodoFromStorage } from "../../utils/asyncStorage";

export default function TodoScreen() {
  const [inpTodo, onChangeInputTodo] = useState("");
   const [todoList, setTodoList] = useState<Todo[]>([]);

 
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const loaded = await getAllTodos();
    setTodoList(loaded);
  };
  const handleDelete = async (id: string) => {
    const updated = await deleteTodo(id);
    setTodoList(updated)
  };
  const handleAdd = async (name: string) => {

    const updated = await addTodo(name);
    console.log(updated);
    setTodoList(updated)
    console.log(todoList);
  };
  const handleUpdate = async (id:string) => {
    const updated = await changeStatusTodo(id);;
    setTodoList(updated);
  };


  return (
    <View style={styles.containerUi}>
      <View style={styles.topBarUi}>
        <Text style={styles.titleUi}>To-Do List</Text>
        <Image
          style={styles.tinyLogoUi}
          source={{
            uri: "https://img.icons8.com/?size=100&id=114426&format=png&color=000000",
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.inputUi}
          onSubmitEditing={() => {
            onChangeInputTodo((inpTodo) => (inpTodo = ""));
            handleAdd(inpTodo);
          }}
          placeholder="Add your task"
          value={inpTodo}
          onChangeText={onChangeInputTodo}
        ></TextInput>
        <TouchableOpacity
          style={styles.addButtonUi}
          onPress={() => {
            onChangeInputTodo((inpTodo) => (inpTodo = ""));
            handleAdd(inpTodo);
          }}
        >
          <Text style={styles.addButtonTextUi}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.scrollUi}
        keyboardShouldPersistTaps="handled"
        data={todoList}
        renderItem={({ item }) => (
          <TodoComponent
            id={item.id}
            todoName={item.todoName}
            todoStatus={item.todoStatus}
            onDelete={handleDelete}
            onChangeStatus={handleUpdate}
          />
        )}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  );
}
