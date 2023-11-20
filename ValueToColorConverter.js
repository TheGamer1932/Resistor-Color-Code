// ValueToColorConverter.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const ValueToColorConverter = () => {
  const [ohms, setOhms] = useState('');
  const [result, setResult] = useState('');

  const convertToColor = () => {
    const colorResult = calculateColor(ohms);
    setResult(`Cores correspondentes: ${colorResult}`);
  };

  const calculateColor = (ohmsValue) => {
    const colors = ['Preto', 'Marrom', 'Vermelho', 'Laranja', 'Amarelo', 'Verde', 'Azul', 'Violeta', 'Cinza', 'Branco'];
    const toleranceColor = 'Dourada';

    const resistanceDigits = ohmsValue.split('');
    const colorValues = resistanceDigits.map(digit => colors[parseInt(digit)]);

    // Adiciona a última faixa dourada (tolerância)
    colorValues.push(toleranceColor);

    return colorValues.join(', ');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Insira o valor da resistência (ohms):</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Digite o valor em ohms"
        value={ohms}
        onChangeText={(text) => setOhms(text)}
        style={{ marginBottom: 20 }}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')}
        style={{ marginTop: 20 }}
      >
        Voltar para a Tela Inicial
      </Button>
      <Button mode="contained" onPress={convertToColor} style={{ marginBottom: 20 }}>
        Converter para Cor
      </Button>
      <Text style={{ fontSize: 16 }}>{result}</Text>
    </View>
  );
};

export default ValueToColorConverter;