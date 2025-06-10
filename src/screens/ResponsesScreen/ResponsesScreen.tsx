import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useJobStore from '../../store/jobStore';
 
export const ResponsesScreen = () => {
  const requests = useJobStore((state) => state.requests);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Respuestas Recibidas</Text>
      <FlatList
        data={requests}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.type} en {item.location}</Text>
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