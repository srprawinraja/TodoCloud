import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoScreen from '../screens/TodoScreen/index';
import SignUpScreen from '../screens/SignUpScreen/index';
import SignInScreen from '../screens/SignInScreen/index';
import VerifyScreen from '../screens/VerifyScreen/index';
import { JSX } from 'react';
import TestScreen from '../screens/TestScreen';



const Stack:any = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Todo" component={TodoScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Verify" component={VerifyScreen} />
    </Stack.Navigator>
  );
}
