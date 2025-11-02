import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ToastAndroid,
} from "react-native";

import styles from "./styleSheet.style";
import TodoComponent from "../../components/TodoComponent";
import { useEffect, useState } from "react";
// import { addTodo, changeStatusTodo, deleteTodo, getAllTodos } from "../../storage/todos";
import {getAllTodoFromDb, addTodoFromDb, deleteTodoFromDb, changeStatusTodoFromDb} from "../../api/todos";
import {Todo} from "../../types/Todo";
import { useClerk } from '@clerk/clerk-expo'
import { Alert } from 'react-native';
import { BackHandler } from 'react-native';
import uuid from "react-native-uuid";
import { useAuth, useUser } from '@clerk/clerk-expo'
import { changeStatusTodo } from "../../storage/todos";
export default function TodoScreen({navigation}) {
  const [inpTodo, onChangeInputTodo] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const { signOut } = useClerk()
  const { isLoaded, isSignedIn, user } = useUser();
  const { getToken } = useAuth()
  const userId = user.id;
  useEffect(() => {
    loadTodos();
  }, []);

  const handleSignOut=async ()=>{

    try{
      await signOut()
      navigation.replace('SignIn');
    } catch(err){
      try{
        ToastAndroid.show(err.errors[0].longMessage, ToastAndroid.LONG);  
      } catch(err){
          ToastAndroid.show("Something went wrong!", ToastAndroid.LONG);  
      }
    }
  }

  const loadTodos = async () => {
    const loaded = await getAllTodoFromDb(userId);
    setTodoList(loaded);
  };
  const handleDelete = async (id: string) => {
    const updated = await deleteTodoFromDb(id, userId);
    setTodoList(updated)
  };
  const handleAdd = async (name: string) => {
    try{
      const id = uuid.v4()
      const createdAt = Date.now().toString()
      const updated = await addTodoFromDb(id, userId, name, createdAt);
      setTodoList(updated)
    } catch(err){
      console.log("error", err)
      console.log(err.message);
    }
  };
  const handleUpdate = async (id:string) => {
    const updated = await changeStatusTodoFromDb(id, userId);
    setTodoList(updated);
  };

  useEffect(() => {
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'LogOut',
            onPress: async () => {handleSignOut()},
            style: 'cancel',
          },
          { text: 'Exit', onPress: () => BackHandler.exitApp() },
        ]);
        return true; 
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      // Clean up when component unmounts
      return () => backHandler.remove();
    }, []);

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
