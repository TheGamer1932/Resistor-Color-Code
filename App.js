// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResistorConverter from './ResistorConverter';
import ColorConverter from './ColorConverter';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ResistorConverter">
        <Stack.Screen name="ResistorConverter" component={ResistorConverter} />
        <Stack.Screen name="ColorConverter" component={ColorConverter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;