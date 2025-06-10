import React from 'react';
import { View, StyleSheet } from 'react-native';
import QuickButton from '../../components/Buttons/quickButton';

const HomeScreen = () => {



  return (
    <View style={[{ backgroundColor: '#fff' }, styles.container]}>



    </View>
  );
};


export default HomeScreen;
const styles = StyleSheet.create({



  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  text: { fontSize: 24 },
  mapContainer: {
    backgroundColor: 'red',
    flex: 1,
    width: '100%'


  },
  zoneWorkTool: {
    backgroundColor: 'gray',
    flex: 1,
    width: '100%'

  },

  zoneBooton: {
    backgroundColor: 'blue', marginBottom: 10, paddingBottom: 40,
    width: '100%'
  }

});