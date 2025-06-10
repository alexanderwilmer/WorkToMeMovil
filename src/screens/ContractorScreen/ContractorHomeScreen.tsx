import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const ContractorHomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido Trabajador</Text>
      <Button title="Ver Trabajos Disponibles" onPress={() => navigation.navigate('AvailableJobs')} />
      <Button title="Mis Trabajos" onPress={() => navigation.navigate('MyJobs')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 }
});