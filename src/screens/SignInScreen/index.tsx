import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import styles from "./styleSheet.style";
import { useSignIn } from '@clerk/clerk-expo'


export default function SignIn({navigation}) {
  const { signIn, isLoaded, setActive } = useSignIn()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const handleSignIn = async () => {
    try {
        if (!isLoaded || !setActive) return
        const signInAttempt = await signIn.create({
          identifier: email,
          password,
        })

        if (signInAttempt.status === 'complete') {
          await setActive({
            session: signInAttempt.createdSessionId,
          })
          navigation.replace('Todo')
        } else {
          ToastAndroid.show(signInAttempt.status, ToastAndroid.LONG);  
          console.error(JSON.stringify(signInAttempt, null, 2))
        }
      } catch (err) {
        try{
          ToastAndroid.show(err.errors[0].longMessage, ToastAndroid.LONG);  
        } catch(err){
          ToastAndroid.show("Something went wrong!", ToastAndroid.LONG);  
        }
        console.error(JSON.stringify(err, null, 2))
      }
    }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}