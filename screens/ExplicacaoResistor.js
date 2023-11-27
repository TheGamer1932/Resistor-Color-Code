import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExplicacaoResistor = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Códigos de Cores em Resistores</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Os resistores utilizam faixas coloridas para representar valores numéricos.
        </Text>
        <Text style={styles.description}>
          - Primeira e Segunda Faixas: Dígitos significativos do valor da resistência.
        </Text>
        <Text style={styles.description}>
          - Terceira Faixa: Multiplicador, número de zeros adicionados aos dígitos.
        </Text>
        <Text style={styles.description}>
          - Quarta Faixa (Dourada): Tolerância do resistor.
        </Text>
        <Text style={styles.description}>
          Selecione as cores nas faixas para calcular o valor ou insira o valor para encontrar as cores.
        </Text>
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descriptionContainer: {
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ExplicacaoResistor;