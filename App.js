import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './theme/colors';
import TodoScreen from './screens/TodoScreen';
export default function App() {
  return <>
    <StatusBar barStyle="dark-content" backgroundColor= 'white'/>
    <TodoScreen/>
  </>
}
