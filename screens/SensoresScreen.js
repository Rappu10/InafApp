import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const sensoresFalsos = [
  { tipo: 'Temperatura', valor: '32°C', estado: 'Alto' },
  { tipo: 'Humedad', valor: '40%', estado: 'Moderado' },
  { tipo: 'Monóxido de Carbono (CO)', valor: '15 ppm', estado: 'Bajo' },
  { tipo: 'Fuego', valor: 'Detectado', estado: 'Crítico' },
];

const getEstadoColor = (estado) => {
  switch (estado) {
    case 'Bajo':
      return '#A3D9A5';
    case 'Moderado':
      return '#FCE38A';
    case 'Alto':
      return '#F38181';
    case 'Crítico':
      return '#D72323';
    default:
      return '#CCC';
  }
};

export default function SensoresScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensores Ambientales</Text>

      {sensoresFalsos.map((sensor, index) => (
        <View
          key={index}
          style={[styles.card, { backgroundColor: getEstadoColor(sensor.estado) }]}
        >
          <Text style={styles.sensorTipo}>{sensor.tipo}</Text>
          <Text style={styles.sensorValor}>{sensor.valor}</Text>
          <Text style={styles.sensorEstado}>{sensor.estado}</Text>
        </View>
      ))}

      <Image source={require('../assets/footer-trees.png')} style={styles.footerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#F2F2F2' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sensorTipo: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  sensorValor: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  sensorEstado: { fontSize: 14, color: '#444' },
  footerImage: { width: '100%', height: 100, resizeMode: 'cover', marginTop: 20 },
});