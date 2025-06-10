import React, { ReactNode } from 'react';
import { Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle, StyleProp, Pressable } from 'react-native';
import { BUTTON_SIZES } from '../../shared/constans/constants';
import globalStyles from '../../utils/themes/styles';
import colors from '../../utils/themes/colors';


interface QuickButtonProps {
  title: string;
  icon: ReactNode;
  direction?: 'Row' | 'Column';
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  buttonSize?: BUTTON_SIZES
}

const QuickButton: React.FC<QuickButtonProps> = (
  { 
    title,
    icon,
    direction = 'Column',
    onPress,
    buttonStyle,
    textStyle,
    buttonSize = BUTTON_SIZES.MEDIUM 
  }) => {

    //TODO: Al tener un pressable, se necesita un estilo para que se vea el cambio cuando se hace "onClick" de momento solo esta
    //el opacity...
  return (
    <>
      <Pressable 
        style={ ({ pressed }) => ([
          styles.card, 
          buttonStyle,
          direction === 'Row' && { flexDirection: 'row', gap: 16},
          { opacity: (pressed) ? 0.7 : 1 }
        ])}
        onPress={ onPress }
      >

        {
          icon
          
        }
        <Text style={[styles.smallBtnText,textStyle]   }>{ title }</Text>

      </Pressable>

    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center', // Centra el contenido horizontalmente dentro de la tarjeta
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 14,
    gap: 4,
    elevation: 5, // Para el efecto de sombra en Android
    shadowColor: '#000', // Para el efecto de sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  //SmallBtn Text
  smallBtnText: {
  
    color: colors.red900
  }
});

export default QuickButton;
