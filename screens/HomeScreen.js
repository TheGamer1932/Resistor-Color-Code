import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ExplicacaoResistor')}>
        <Text style={styles.buttonText}>Como Ler Códigos de Cores</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConversaoCorParaValor')}>
        <Text style={styles.buttonText}>Conversão de Cor para Valor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConversaoValorParaCor')}>
        <Text style={styles.buttonText}>Conversão de Valor para Cor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;