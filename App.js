import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/theme/colors';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return <>
    <StatusBar barStyle="dark-content" backgroundColor= 'white'/>
    <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
  </>
}
