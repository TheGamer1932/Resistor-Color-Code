import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const resistorColors = [
  { color: 'Preto', value: 0, tolerance: '' },
  { color: 'Marrom', value: 1, tolerance: '1%' },
  { color: 'Vermelho', value: 2, tolerance: '2%' },
  { color: 'Laranja', value: 3, tolerance: '' },
  { color: 'Amarelo', value: 4, tolerance: '' },
  { color: 'Verde', value: 5, tolerance: '0,5%' },
  { color: 'Azul', value: 6, tolerance: '' },
  { color: 'Roxo', value: 7, tolerance: '' },
  { color: 'Cinza', value: 8, tolerance: '' },
  { color: 'Branco', value: 9, tolerance: '' },
  { color: 'Ouro', value: -1, tolerance: '5%' },
  { color: 'Prata', value: -2, tolerance: '10% (não mais fabricado)' },
];

const ConversaoValorParaCorScreen = ({ navigation }) => {
  const [ohmValue, setOhmValue] = useState('');
  const [resultColors, setResultColors] = useState([]);

  const convertOhmToColors = () => {
    const ohm = parseFloat(ohmValue);
    if (!isNaN(ohm)) {
      const ohmString = ohm.toString();
      const digits = ohmString.split('.')[0];

      if (digits.length >= 2) {
        const firstColor = resistorColors[parseInt(digits[0])];
        const secondColor = resistorColors[parseInt(digits[1])];
        const zeros = ohmString.length - 2;
        setResultColors([firstColor, secondColor, resistorColors[zeros]]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversão de Valor para Cor</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira o valor em ohms"
        value={ohmValue}
        onChangeText={(text) => setOhmValue(text)}
      />
      <TouchableOpacity style={styles.convertButton} onPress={convertOhmToColors}>
        <Text style={styles.buttonText}>Converter para Cores</Text>
      </TouchableOpacity>
      <View style={styles.resultContainer}>
        {resultColors.map((color, index) => (
          <View key={index} style={styles.colorBox}>
            <View style={[styles.colorSwatch, { backgroundColor: color.color.toLowerCase() }]} />
            <Text style={styles.colorText}>{color.color}</Text>
            <Text style={styles.colorText}>{color.tolerance}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  convertButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colorBox: {
    alignItems: 'center',
    marginRight: 10,
  },
  colorSwatch: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 5,
  },
  colorText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ConversaoValorParaCorScreen;