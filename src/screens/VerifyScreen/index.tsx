import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import styles from "./styleSheet.style";

export default function OtpVerifyScreen({navigation}) {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // TODO: Add your OTP verification logic here
    console.log('Verifying OTP:', otp);
    // On success -> navigation.replace('Home');
    navigation.replace('Todo')
  };

  const handleResend = () => {
    // TODO: Add resend logic here
    console.log('Resend OTP clicked');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP 🔒</Text>
      <Text style={styles.subtitle}>Enter the code sent to your email</Text>

      <TextInput
        placeholder="Enter 6-digit OTP"
        value={otp}
        onChangeText={setOtp}
        style={styles.input}
        keyboardType="number-pad"
        maxLength={6}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>

    </View>
  );
}