// ResistorConverter.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const ResistorConverter = ({ navigation }) => {
  const [ohms, setOhms] = useState('');
  const [result, setResult] = useState('');

  const convertToColor = () => {
    const colorResult = calculateColor(ohms);
    setResult(`Cores correspondentes: ${colorResult}`);
  };

  const calculateColor = (ohmsValue) => {
    const colors = ['Marrom', 'Vermelho', 'Laranja', 'Amarelo', 'Verde', 'Azul', 'Violeta', 'Cinza', 'Branco'];
    const ohmsDigits = ohmsValue.split('');
    const colorValues = ohmsDigits.slice(0, 3).map(digit => colors[parseInt(digit)]);
    return colorValues.join(', ') + ' - Dourada';
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Insira o valor da resistência (ohms):</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Digite o valor em ohms"
        value={ohms}
        onChangeText={(text) => setOhms(text)}
        style={{ marginBottom: 10 }}
      />
      <Button mode="contained" onPress={convertToColor} style={{ marginBottom: 20 }}>
        Converter para Cor
      </Button>
      <Text style={{ fontSize: 16 }}>{result}</Text>
    </View>
  );
};

export default ResistorConverter;