import React from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LogoutButton({ navigation }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userId');
    await AsyncStorage.removeItem('role');
    Alert.alert('Sesión cerrada');
    navigation.replace('Login'); // Te lleva de vuelta al Login
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={styles.button}>
      <Text style={styles.text}>Cerrar sesión</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C4A484',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center'
  },
  text: {
    color: '#000',
    fontWeight: 'bold'
  }
});