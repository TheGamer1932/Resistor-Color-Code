import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./LogoColor-removebg-preview.png')}
        resizeMode="contain"
      />
      <Text style={styles.message}>Resistor Color Code</Text>
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
  image: {
    width: '500%',
    height: '20%',
    marginBottom: 20,
  },
});

export default HomeScreen;
