// ColorConverter.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const ColorConverter = () => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [result, setResult] = useState('');

  const convertToValue = () => {
    const valueResult = calculateValue(selectedColors);
    setResult(`Valor da resistência: ${valueResult} ohms`);
  };

  const calculateValue = (colors) => {
    const colorValues = {
      Marrom: 1,
      Vermelho: 2,
      Laranja: 3,
      Amarelo: 4,
      Verde: 5,
      Azul: 6,
      Violeta: 7,
      Cinza: 8,
      Branco: 9,
    };

    const resistanceDigits = colors.slice(0, 3).map(color => colorValues[color]);
    const resistanceValue = parseInt(resistanceDigits.join(''));
    return resistanceValue + ' ohms';
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Selecione as cores das faixas:</Text>
      {/* Adicione componentes para selecionar as cores */}
      <Button mode="contained" onPress={convertToValue} style={{ marginBottom: 20 }}>
        Converter para Valor
      </Button>
      <Text style={{ fontSize: 16 }}>{result}</Text>
    </View>
  );
};

export default ColorConverter;