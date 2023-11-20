// ColorToValueConverter.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Modal, Portal, TextInput } from 'react-native-paper';

const ColorToValueConverter = () => {
  const [selectedColors, setSelectedColors] = useState(['Preto', 'Marrom', 'Vermelho']);
  const [result, setResult] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [additionalDigit, setAdditionalDigit] = useState('');

  const convertToValue = () => {
    const valueResult = calculateValue(selectedColors, additionalDigit);
    setResult(`Valor da resistência: ${valueResult} ohms`);
  };

  const calculateValue = (colors, additionalDigit) => {
    const colorValues = {
      Preto: 0,
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

    const resistanceDigits = colors.map(color => colorValues[color]);
    const resistanceValue = parseInt(resistanceDigits.join('') + additionalDigit);
    return resistanceValue + ' ohms';
  };

  const handleColorSelection = (color, index) => {
    const updatedColors = [...selectedColors];
    updatedColors[index] = color;
    setSelectedColors(updatedColors);
  };

  const toggleModal = () => setShowModal(!showModal);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Selecione as cores das faixas:</Text>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        {selectedColors.map((color, index) => (
          <Button
            key={index}
            mode="contained"
            onPress={() => toggleModal()}
            style={{ marginRight: 10, backgroundColor: color.toLowerCase() }}
          >
            {color}
          </Button>
        ))}
      </View>
      <TextInput
        keyboardType="numeric"
        placeholder="Digite o valor adicional (opcional)"
        value={additionalDigit}
        onChangeText={(text) => setAdditionalDigit(text)}
        style={{ marginBottom: 10 }}
      />
      <Button mode="contained" onPress={convertToValue} style={{ marginBottom: 20 }}>
        Converter para Valor
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')}
        style={{ marginTop: 20 }}
      >
        Voltar para a Tela Inicial
      </Button>
      <Text style={{ fontSize: 16 }}>{result}</Text>
      <Portal>
        <Modal visible={showModal} onDismiss={toggleModal} contentContainerStyle={{ padding: 20 }}>
          <Text style={{ fontSize: 18 }}>
            Aqui, você pode selecionar cores realistas para representar as faixas do resistor. Cada faixa corresponde a
            um dígito no valor da resistência. Clique nas cores para personalizar a representação do resistor.
          </Text>
          <Button mode="contained" onPress={toggleModal} style={{ marginTop: 20 }}>
            Fechar
          </Button>
        </Modal>
      </Portal>
    </View>
  );
};

export default ColorToValueConverter;