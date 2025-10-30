import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import styles from "./styleSheet.style";
import { useSignUp } from '@clerk/clerk-expo'


export default function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, isLoaded, setActive } = useSignUp()

  const handleSignup = async () => {
  if (!isLoaded || !signUp) {
        return
      }
    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });

      // Send OTP to email
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      ToastAndroid.show("OTP sent to your email!", ToastAndroid.LONG);
      navigation.replace('Verify')
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
      try{
          ToastAndroid.show(err.errors[0].longMessage, ToastAndroid.LONG);  
      } catch(err){
          ToastAndroid.show("Something went wrong!", ToastAndroid.LONG);  
      }
      console.error(JSON.stringify(err, null, 2))    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account ✨</Text>
      <Text style={styles.subtitle}>Enter your email and password to receive an OTP</Text>

      <TextInput
        placeholder="Email address"
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
        keyboardType="visible-password"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      <View style={styles.signinContainer}>
        <Text style={styles.signinText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Verify')}>
          <Text style={styles.signinLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}