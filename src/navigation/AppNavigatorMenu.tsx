
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import TermsAndConditionsScreen from '../screens/TermsAndConditions/TermsAndConditionsScreen';
import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { MapScreen } from '../screens/maps/MapScreen';

const Stack = createNativeStackNavigator();

const AppNavigatorMenu = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MapScreen" component={MapScreen} />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={TermsAndConditionsScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />


        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatorMenu;