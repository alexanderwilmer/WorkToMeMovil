

import React from 'react';
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle, StyleProp } from 'react-native';


import globalStyles from '../../utils/themes/styles';
import colors from '../../utils/themes/colors';
import { BUTTON_SIZES } from '../../shared/constans/constants';

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean,
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  buttonSize?: BUTTON_SIZES
}

const ButtonFooter: React.FC<PrimaryButtonProps> = (
  { 
    title,
    onPress,
    disabled = false,
    loading = false,
    buttonStyle,
    textStyle,
    buttonSize = BUTTON_SIZES.MEDIUM 
  }) => {

  return (
    <>
      <TouchableOpacity
        disabled={ disabled }
        style={[ 
          { backgroundColor: disabled ? colors.red900 : colors.red900 },
          buttonSize === BUTTON_SIZES.SMALL && styles.primaryButtonSmall, 
          buttonSize === BUTTON_SIZES.MEDIUM && styles.primaryButton, 
          buttonStyle
        ]} // Combina estilos predeterminados con los personalizados
        onPress={ onPress }
      >

       {
        loading ? (
          <></>
        ) : (
          <Text style={[ 
            { color: disabled ? colors.red900 : colors.red900 },
            buttonSize === BUTTON_SIZES.SMALL && styles.primaryButtonSmallText,
            buttonSize === BUTTON_SIZES.MEDIUM && styles.primaryButtonText,
            textStyle
           ]}>{title}</Text>
        )

       } 
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
    //MEDIUM Button
    primaryButton: {
      //backgroundColor: colors.red600, // Color del botón (personalizable)
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 6,
      alignItems: 'center',
      width: '100%'
    },
    primaryButtonText: {
        //color: colors.white, // Color del texto
   
    },

    //SMALL Button
    primaryButtonSmall: {
      backgroundColor: colors.red900, // Color del botón (personalizable)
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    primaryButtonSmallText: {
        color: colors.red900, // Color del texto
        ...globalStyles,
     },
});

export default ButtonFooter;
