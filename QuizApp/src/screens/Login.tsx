import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State untuk menentukan mode Login atau Register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Fungsi untuk registrasi
  const handleRegister = async () => {
    try {
      const response = await fetch('https://39lxf0t6-5000.asse.devtunnels.ms/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        navigation.navigate('Main'); // Setelah berhasil registrasi, arahkan ke halaman login
      } else {
        setErrorMessage(data.message || 'Terjadi kesalahan');
      }
    } catch (error) {
      setErrorMessage('Gagal terhubung ke server');
    }
  };

  // Fungsi untuk login
  const handleLogin = async () => {
    try {
      const response = await fetch('https://39lxf0t6-5000.asse.devtunnels.ms/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        navigation.navigate('Main'); // Arahkan ke halaman utama setelah login berhasil
      } else {
        setErrorMessage(data.message || 'Email atau password salah');
      }
    } catch (error) {
      setErrorMessage('Gagal terhubung ke server');
    }
  };

  return (
    <View>
      <Text style={{ textAlign: 'center', color: '#358AF9', fontSize: 30, fontWeight: '900', padding: 10 }}>
        {isLogin ? 'Login' : 'Register'}
      </Text>
      <Image
        source={require('../../assets/login.jpg')}
        style={{
          height: 200,
          width: 380,
          margin: 15,
          borderRadius: 25,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity style={{ borderBottomColor: 'black', borderBottomWidth: isLogin ? 1 : 0 }} onPress={() => setIsLogin(true)}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ borderBottomColor: 'black', borderBottomWidth: isLogin ? 0 : 1 }} onPress={() => setIsLogin(false)}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>

      {errorMessage ? (
        <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{errorMessage}</Text>
      ) : null}

      {!isLogin ? (
        <>
          <View style={{ borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingTop: 25 }}>
            <Image source={require('../../assets/name.png')} style={{ height: 24, width: 24 }} />
            <TextInput
              style={{ marginLeft: 2 }}
              placeholder="Nama"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          <View style={{ borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingTop: 25 }}>
            <Image source={require('../../assets/mail.png')} style={{ height: 24, width: 24 }} />
            <TextInput
              style={{ marginLeft: 2 }}
              placeholder="Email address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={{ borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingTop: 25 }}>
            <Image source={require('../../assets/lock.png')} style={{ height: 24, width: 24 }} />
            <TextInput
              style={{ marginLeft: 2 }}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
            <TouchableOpacity onPress={handleRegister}>
              <Text
                style={{
                  marginTop: 10,
                  backgroundColor: '#CCE5FF',
                  paddingHorizontal: 55,
                  paddingVertical: 20,
                  borderRadius: 15,
                  textAlign: 'center',
                  fontSize: 20,
                  alignItems: 'center',
                  fontWeight: '900',
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={{ borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingTop: 25 }}>
            <Image source={require('../../assets/mail.png')} style={{ height: 24, width: 24 }} />
            <TextInput
              style={{ marginLeft: 2 }}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={{ borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingTop: 25 }}>
            <Image source={require('../../assets/lock.png')} style={{ height: 24, width: 24 }} />
            <TextInput
              style={{ marginLeft: 2 }}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
            <TouchableOpacity onPress={handleLogin}>
              <Text
                style={{
                  marginTop: 10,
                  backgroundColor: '#CCE5FF',
                  paddingHorizontal: 55,
                  paddingVertical: 20,
                  borderRadius: 15,
                  textAlign: 'center',
                  fontSize: 20,
                  alignItems: 'center',
                  fontWeight: '900',
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Login;
