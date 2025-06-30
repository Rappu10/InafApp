import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

export default function SensoresScreen({ navigation }) {
  return (
    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={[styles.title, { alignSelf: 'center' }]}>Sensores Ambientales</Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
        {sensoresFalsos.map((sensor, index) => (
          <View
            key={index}
            style={[
              styles.card,
              {
                backgroundColor: 'rgba(136, 104, 76, 1)',
                width: 150,
                height: 150,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: 'rgba(136, 104, 76, 1)',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.4,
                shadowRadius: 40,
                elevation: 40, // For Android shadow
              },
            ]}
          >
            <Text style={styles.sensorTipo}>{sensor.tipo}</Text>
            <Text style={styles.sensorValor}>{sensor.valor}</Text>
            <Text style={styles.sensorEstado}>{sensor.estado}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.buttonText}>Regresar a Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: 'rgba(12, 11, 10, 1)' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#fff' },
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sensorTipo: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  sensorValor: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  sensorEstado: { fontSize: 14, color: '#444' },
  button: {
    marginTop: 30,
    backgroundColor: '#884C4C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});