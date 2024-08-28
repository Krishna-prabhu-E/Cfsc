import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, StyleSheet, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Check if the email and password are both "k"
    if (email === 'k' && password === 'k') {
      navigation.navigate('Home'); // Navigate to the Home screen
    } else {
      Alert.alert('Invalid Credentials', 'Please check your email and password.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('../assets/tn.png')} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#BDC3C7"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#BDC3C7"
        />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.linkText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2', // Light gray background
    padding: 20,
  },
  innerContainer: {
    width: width * 0.85,
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#2C3E50', // Dark gray/navy background
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFC107', // Yellow text
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#BDC3C7',
    backgroundColor: '#ECF0F1', // Light gray background
    color: '#2C3E50', // Dark gray text
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#FFC107', // Yellow background for the button
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#2C3E50', // Dark gray text
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    color: '#FFC107', // Yellow text
    fontSize: 14,
  },
});

export default Login;
