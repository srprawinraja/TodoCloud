// src/screens/TodoScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, ToastAndroid } from 'react-native';
import { useAuth, useUser } from '@clerk/clerk-expo'
import {Todo} from '../types/Todo'

import { supabase } from '../utils/supabase';

export const addTodoFromDb = async (id:string, userId:string, name: string, createdAt:string):Promise<Todo[]> => {
    await supabase
      .from('todos')
      .insert([
        {
          id: id,  
          user_id: userId,  
          title: name,
          is_completed: false,
          created_at: createdAt
        }
      ]);
    return await getAllTodoFromDb(userId);
  };

  // Read / Fetch todos
export const getAllTodoFromDb = async (userId:string):Promise<Todo[]>  => {
  try{
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', userId)
      if (error) console.log(error);
      const todos:Todo[] = []
      for(const value of data){
        todos.push(
          {
            id:value.id,
            userId:value.user_id,
            todoName:value.title,
            createdAt:value.created_at,
            todoStatus:value.is_completed
          }
        )
      }
      return todos
  } catch(err){
    console.log(err);
  }
  };
  export const changeStatusTodoFromDb = async (id:string, userId:string):Promise<Todo[]>  => {
    const isCompleted = await getTodoStatusFromStorage(id, userId)
    const { error } = await supabase
      .from('todos')
      .update({ is_completed:!isCompleted })
      .eq('id', id)
      .eq('user_id', userId)
    if (error) console.log(error);
    return await getAllTodoFromDb(userId);
  };
  export const getTodoStatusFromStorage = async (id:string, userId:string):Promise<Todo>=>{
    const { data, error } = await supabase
      .from('todos')
      .select('is_completed')
      .eq('id', id)
      .eq('user_id', userId)
    if (error) console.log(error);
    return data[0].is_completed
  }
  export const deleteTodoFromDb = async (id:string, userId:string):Promise<Todo[]>  => {
    try{
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)
      .eq('user_id', userId)
    if (error) console.log(error);
    return await getAllTodoFromDb(userId);
    } catch(err){
    console.log(err);
  }
  };
