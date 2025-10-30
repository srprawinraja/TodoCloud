import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import color from '../theme/colors'


export default function OtpVerifyScreen() {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // TODO: Add your OTP verification logic here
    console.log('Verifying OTP:', otp);
    // On success -> navigation.replace('Home');
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

      <TouchableOpacity onPress={handleResend}>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 4,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: color.CUSTOM_ORANGE,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  resendText: {
    marginTop: 20,
    color: color.CUSTOM_ORANGE,
    fontWeight: 'bold',
  },
});
