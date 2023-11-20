import { registerRootComponent } from 'expo';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import ColorToValueConverter from './ColorToValueConverter';
import ValueToColorConverter from './ValueToColorConverter';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ title: 'Conversor de Resistores' }} />
          <Stack.Screen
            name="ValueToColorConverter"
            component={ValueToColorConverter}
            options={{ title: 'Converter Valor para Cor' }}
          />
          <Stack.Screen
            name="ColorToValueConverter"
            component={ColorToValueConverter}
            options={{ title: 'Converter Cor para Valor' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

registerRootComponent(App);