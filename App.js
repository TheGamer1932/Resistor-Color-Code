import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ExplicacaoResistor from './screens/ExplicacaoResistor';
import ConversaoCorParaValorScreen from './screens/ConversaoCorParaValorScreen';
import ConversaoValorParaCorScreen from './screens/ConversaoValorParaCorScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ResistorColorCode">
        <Stack.Screen name="ResistorColorCode" component={HomeScreen} />
        <Stack.Screen name="ExplicacaoResistor" component={ExplicacaoResistor} />
        <Stack.Screen name="ConversaoCorParaValor" component={ConversaoCorParaValorScreen} />
        <Stack.Screen name="ConversaoValorParaCor" component={ConversaoValorParaCorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;