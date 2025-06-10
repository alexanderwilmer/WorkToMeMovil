import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import useJobStore from '../../store/jobStore';
 
export const RequestScreen = ({ navigation }: any) => {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const createRequest = useJobStore((state) => state.createRequest);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitar Trabajo</Text>
      <TextInput style={styles.input} placeholder="Tipo de trabajo" value={type} onChangeText={setType} />
      <TextInput style={styles.input} placeholder="Ubicación" value={location} onChangeText={setLocation} />
      <Button title="Enviar solicitud" onPress={() => {
        createRequest(type, location);
        navigation.navigate('Responses');
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10 }
});