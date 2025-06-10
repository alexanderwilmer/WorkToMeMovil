import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import useJobStore from '../stores/jobStore';

export const AvailableJobsScreen = () => {
  const jobs = useJobStore((state) => state.requests);
  const takeJob = useJobStore((state) => state.takeJob);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabajos Disponibles</Text>
      <FlatList
        data={jobs}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.jobItem}>
            <Text>{item.type} - {item.location}</Text>
            <Button title="Aceptar" onPress={() => takeJob(index)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  jobItem: { marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }
});