
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={theme.title}>Quiénes Somos</Text>
      <Text style={theme.text}>
        Somos un equipo apasionado por la tecnología y la innovación que busca transformar el mundo digital.
      </Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    ...theme.container,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});
