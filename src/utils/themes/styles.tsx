// src/constants/styles.ts

import { Platform, StyleSheet } from 'react-native';
import colors from './colors';

const globalStyles = StyleSheet.create({
  //Contenor principal de cualquier pantalla
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.red900
  },
  button: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.red900
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    fontWeight: '300',
    color: 'black'
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: Platform.OS === 'android' ? 15 : 0,
  },


});

export default globalStyles;
