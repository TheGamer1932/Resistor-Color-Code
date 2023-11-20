// Home.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Modal, Portal, Provider } from 'react-native-paper';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <Provider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>ResistorDye</Text>
        <Button mode="contained" onPress={() => navigation.navigate('ValueToColorConverter')}>
          Converter Valor para Cor
        </Button>
        <Button mode="contained" onPress={() => navigation.navigate('ColorToValueConverter')} style={{ marginTop: 20 }}>
          Converter Cor para Valor
        </Button>
        <Button
          icon="information"
          style={{ position: 'absolute', top: 0, right: 0, margin: 16 }}
          onPress={showModal}
        />
        <Portal>
          <Modal visible={modalVisible} onDismiss={hideModal} contentContainerStyle={{ padding: 20 }}>
            <Text style={{ fontSize: 18, textAlign: 'justify' }}>
              Este aplicativo permite converter valores de resistência elétrica em códigos de cores de resistores e
              vice-versa.{'\n\n'}
              Na opção "Converter Valor para Cor", insira o valor da resistência em ohms, e o aplicativo calculará e
              exibirá as cores correspondentes das três primeiras faixas do resistor. A quarta faixa será sempre dourada,
              indicando uma tolerância de 5%.{'\n\n'}
              Na opção "Converter Cor para Valor", selecione as cores das três primeiras faixas de um resistor, e o
              aplicativo calculará e apresentará o valor da resistência em ohms.{'\n\n'}
              Aprecie a praticidade do Conversor de Resistores!
            </Text>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};

export default Home;