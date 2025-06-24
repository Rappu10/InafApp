import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/header-trees.png')} style={styles.headerImage} />
      
      <View style={styles.form}>
        <TextInput placeholder="Usuario" style={styles.input} placeholderTextColor="#999" />
        <TextInput placeholder="Contraseña" style={styles.input} placeholderTextColor="#999" secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('../assets/footer-trees.png')} style={styles.footerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', backgroundColor: '#F2F2F2' },
  headerImage: { width: '100%', height: 100, resizeMode: 'cover' },
  form: { padding: 20 },
  input: {
    height: 50,
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#4A9A2C',
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonText: { textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 16 },
  footerImage: { width: '100%', height: 100, resizeMode: 'cover' },
});