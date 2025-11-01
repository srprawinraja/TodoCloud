import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/theme/colors';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import Constants from 'expo-constants';

export default function App() {
  const publishableKey = Constants.expoConfig.extra.clerkPublishableKey;
  return <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>

    <StatusBar barStyle="dark-content" backgroundColor= 'white'/>
    <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
  </ClerkProvider>
  
}
