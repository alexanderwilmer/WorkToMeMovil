import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useJobStore from '../stores/jobStore';

export const MyJobsScreen = () => {
  const myJobs = useJobStore((state) => state.myJobs);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Trabajos</Text>
      <FlatList
        data={myJobs}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.type} - {item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1 }
});