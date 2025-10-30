import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import styles from "./styleSheet.style";
import { useSignUp } from '@clerk/clerk-expo';
export default function OtpVerifyScreen({navigation}) {
  const [otp, setOtp] = useState('');
  const { signUp, isLoaded, setActive } = useSignUp()
   // Step 2: Verify OTP
   const handleVerify = async () => {
      if (!isLoaded || !signUp) {
        return
      }
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({code: otp});

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        ToastAndroid.show("Signup successful!", ToastAndroid.LONG);  
        navigation.replace("Todo")

      } else {
        ToastAndroid.show("OTP verification failed", ToastAndroid.LONG);  
      }
    } catch (err) {
      try{
        ToastAndroid.show(err.errors[0].longMessage, ToastAndroid.LONG);  
      } catch(err){
          ToastAndroid.show("Something went wrong!", ToastAndroid.LONG);  
        }
    }
  };
  const handleResend = async () => {
    await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    ToastAndroid.show('Resend OTP clicked', ToastAndroid.LONG);  
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