import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet, } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleRegister = () => {
    if (!username || !password || !fullName) {
      alert('Vui lòng điền đầy đủ thông tin');
    } else {
      // Xử lý logic đăng ký tại đây
      navigation.navigate('Login');
    }
  };

  return (
    <View style={{ height: '100%', backgroundColor: '#fff' }} >
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 40, fontStyle: 'italic', fontWeight: 'bold', top: 70, color: '#00B761' }}>
          Create account
        </Text>
        <Text style={{ fontSize: 16,  top: 80, color: 'black' }}>
          Create an account so you explore all 
        </Text>
        <Text style={{ fontSize: 16,  top: 80, color: 'black' }}>
         the existing jobs
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Họ và tên"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.signInButton} onPress={handleRegister}>
          <Text style={styles.signInButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:150,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#F1F1F1',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F1F1F1',
    borderRadius: 4,
  },
  signInButton: {
    justifyContent:'center',
    width: '100%',
    backgroundColor: '#00B761',
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius:10
  },
  signInButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default RegisterScreen;
