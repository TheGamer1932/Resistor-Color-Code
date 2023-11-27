import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App from './App';
import ConversaoCorParaValorScreen from './screens/ConversaoCorParaValorScreen';
import ConversaoValorParaCorScreen from './screens/ConversaoValorParaCorScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="ConversaoCorParaValor" component={ConversaoCorParaValorScreen} />
        <Stack.Screen name="ConversaoValorParaCor" component={ConversaoValorParaCorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;