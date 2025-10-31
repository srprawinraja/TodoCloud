import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoScreen from '../screens/TodoScreen/index';
import SignUpScreen from '../screens/SignUpScreen/index';
import SignInScreen from '../screens/SignInScreen/index';
import VerifyScreen from '../screens/VerifyScreen/index';
import { JSX } from 'react';
import TestScreen from '../screens/TestScreen';
import { useAuth } from '@clerk/clerk-expo'




export default function AppNavigator() {
  const Stack:any = createNativeStackNavigator();
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; 
  }

  const initialScreen = isSignedIn ? "Todo" : "SignIn";
  return (
    <Stack.Navigator initialRouteName={initialScreen} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Todo" component={TodoScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Verify" component={VerifyScreen} />
    </Stack.Navigator>
  );
}
