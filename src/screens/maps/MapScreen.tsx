import { StyleSheet, View } from 'react-native';

import { useLocationStore } from '../../store/location/useLocationStore';
import { useEffect } from 'react';
import { LoadingScreen } from '../loading/LoadingScreen';


export const MapScreen = () => {

  const { lastKnownLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if ( lastKnownLocation === null ) {
      getLocation();
    }
  }, [])
  
 

  if ( lastKnownLocation === null ) {
    return (<LoadingScreen />)
  }


  return (
    <View style={ styles.container}>



      <Map 
        initialLocation={ lastKnownLocation }
      />

   </View>
  )
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },

 });