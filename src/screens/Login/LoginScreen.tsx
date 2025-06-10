import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuthStore } from '../../store/authStore';


export const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'cliente' | 'contratista'>('cliente');
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    if (email && password) {
      login(email, role);
      navigation.navigate('Home');
    } else {
      alert('Completa todos los campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput style={styles.input} placeholder="Correo electrónico" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Contraseña" value={password} secureTextEntry onChangeText={setPassword} />
      <View style={styles.roleButtons}>
        <Button title="Cliente" onPress={() => setRole('cliente')} color={role === 'cliente' ? 'blue' : 'gray'} />
        <Button title="Contratista" onPress={() => setRole('contratista')} color={role === 'contratista' ? 'blue' : 'gray'} />
      </View>
      <Button title="Ingresar" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  link: { marginTop: 20, color: 'blue', textAlign: 'center' },
  roleButtons: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }
});