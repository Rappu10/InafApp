import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SensoresScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensores</Text>
      <View style={styles.card} />
      <View style={styles.card} />
      <Image source={require('../assets/footer-trees.png')} style={styles.footerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#F2F2F2' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  card: {
    height: 120,
    backgroundColor: '#CFE0C3',
    borderRadius: 16,
    marginBottom: 20,
  },
  footerImage: { width: '100%', height: 100, resizeMode: 'cover', marginTop: 20 },
});