import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ExplicacaoResistor from './screens/ExplicacaoResistor';
import ConversaoCorParaValorScreen from './screens/ConversaoCorParaValorScreen';
import ConversaoValorParaCorScreen from './screens/ConversaoValorParaCorScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Informações" component={ExplicacaoResistor} />
        <Tab.Screen name="Cor para Valor" component={ConversaoCorParaValorScreen} />
        <Tab.Screen name="Valor para Cor" component={ConversaoValorParaCorScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
