import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Picker, StyleSheet } from 'react-native';
import { resistorColors } from './ResistorColors';

const ConversaoCorParaValorScreen = ({ navigation }) => {
  const [selectedFirstColor, setSelectedFirstColor] = useState('');
  const [selectedSecondColor, setSelectedSecondColor] = useState('');
  const [selectedThirdColor, setSelectedThirdColor] = useState('');
  const [resistanceValue, setResistanceValue] = useState('');

  const calculateResistanceFromColors = () => {
    if (selectedFirstColor && selectedSecondColor && selectedThirdColor) {
      const value = `${resistorColors.findIndex((color) => color.Item === selectedFirstColor)}${resistorColors.findIndex((color) => color.Item === selectedSecondColor)}`;
      const multiplier = resistorColors.findIndex((color) => color.Item === selectedThirdColor);

      return `Valor: ${value} x 10^${multiplier} Ω ±5`;
    }
    return 'Valor da Resistência: ';
  };

  const handleCalculate = () => {
    if (selectedFirstColor && selectedSecondColor && selectedThirdColor) {
      const value = `${resistorColors.findIndex((color) => color.Item === selectedFirstColor)}${resistorColors.findIndex((color) => color.Item === selectedSecondColor)}`;
      const multiplier = resistorColors.findIndex((color) => color.Item === selectedThirdColor);

      const resistance = `Valor: ${value} x 10^${multiplier} Ω ±5`;
      setResistanceValue(resistance);
    } else {
      setResistanceValue('Selecione as Três Cores');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversão de Cor para Valor</Text>
      <View style={styles.colorSelectionContainer}>
        <Picker
          selectedValue={selectedFirstColor}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedFirstColor(itemValue)}
        >
          <Picker.Item label="1ª cor" value="" />
          {resistorColors.map((color, index) => (
            <Picker.Item key={index} label={color.color} value={color.Item} />
          ))}
        </Picker>
        <Picker
          selectedValue={selectedSecondColor}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedSecondColor(itemValue)}
        >
          <Picker.Item label="2ª cor" value="" />
          {resistorColors.map((color, index) => (
            <Picker.Item key={index} label={color.color} value={color.Item} />
          ))}
        </Picker>
        <Picker
          selectedValue={selectedThirdColor}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedThirdColor(itemValue)}
        >
          <Picker.Item label="3ª cor" value="" />
          {resistorColors.map((color, index) => (
            <Picker.Item key={index} label={color.color} value={color.Item} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calcular Valor</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>{resistanceValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  colorSelectionContainer: {
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  calculateButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 15,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333333',
  },
});

export default ConversaoCorParaValorScreen;