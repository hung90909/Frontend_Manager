import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';


const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleLogin = () => {
        if (username === 'KhachHang' && password === '123') {
            navigation.navigate('Main');
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không chính xác.');
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={{ height: '100%', backgroundColor: '#fff' }} >
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', top: 100, color: '#00B761' }}>
                    Login here
                </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', top: 120, color: 'black' }}>
                    Welcome back you've
                </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', top: 120, color: 'black' }}>
                    been missed!
                </Text>
            </View>
            <View style={styles.container}>
                {error ? <Text style={styles.error}>{error}</Text> : null}
                
                <TextInput
                    style={{
                        width: '100%',
                        height: 50,
                        borderColor: '#F1F1F1',
                        borderWidth: 1,
                        marginBottom: 10,
                        paddingHorizontal: 10,
                        backgroundColor: '#F1F1F1',
                        borderRadius: 4,
                        outlineColor: 'black',
                        outlineWidth: 2
                    }}
                    placeholder="Email"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={{
                        width: '100%',
                        height: 50,
                        borderColor: '#F1F1F1',
                        borderWidth: 1,
                        marginBottom: 10,
                        paddingHorizontal: 10,
                        backgroundColor: '#F1F1F1',
                        borderRadius: 4,
                        outlineColor: 'black',
                        outlineWidth: 2,
                        top: 10
                    }}
                    placeholder="Mật khẩu"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={{
                    width: '100%',
                    backgroundColor: '#00B761',
                    height: 50,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 20
                }} onPress={handleLogin}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={{ top: 30, fontSize: 15, fontWeight: 'bold', }}>
                        Create new account
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 160,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#F1F1F1',
        borderRadius: 4
    },
    error: {
        color: 'red'
    }
});

export default LoginScreen;
