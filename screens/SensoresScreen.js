import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SensoresScreen({ navigation }) {
  const [sensores, setSensores] = useState([]);
  const [loading, setLoading] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    rotation.setValue(0);
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const stopRotation = () => {
    rotation.stopAnimation();
  };

  const fetchSensores = async () => {
    try {
      setLoading(true);
      startRotation();
      const response = await fetch('http://192.168.1.110:3000/api/sensores');
      if (!response.ok) throw new Error('Error al obtener sensores');
      const data = await response.json();
      setSensores(data);
    } catch (error) {
      Alert.alert('Error', error.message || 'No se pudieron cargar los sensores');
    } finally {
      setLoading(false);
      stopRotation();
    }
  };

  useEffect(() => {
    fetchSensores();
  }, []);

  const getEstadoColor = (estado) => {
    switch (estado) {
      case 'Bajo': return '#A3D9A5';
      case 'Moderado': return '#FCE38A';
      case 'Alto': return '#F38181';
      case 'Crítico': return '#D72323';
      default: return '#CCC';
    }
  };

  const rotateIcon = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensores Ambientales</Text>

      <TouchableOpacity style={styles.refreshButton} onPress={fetchSensores} disabled={loading}>
        <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
          <Ionicons name="refresh" size={20} color="#000" style={{ marginRight: 8 }} />
        </Animated.View>
        <Text style={styles.refreshText}>Refrescar</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#C4A484" style={{ marginTop: 20 }} />
        ) : sensores.length === 0 ? (
          <Text style={{ color: '#fff', textAlign: 'center', marginTop: 20 }}>
            No hay datos de sensores disponibles.
          </Text>
        ) : (
          sensores.map((sensor, index) => (
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
                  elevation: 40,
                },
              ]}
            >
              <Text style={styles.sensorTipo}>{sensor.tipo}</Text>
              <Text style={styles.sensorValor}>{sensor.valor}</Text>
              <Text style={[styles.sensorEstado, { color: getEstadoColor(sensor.estado) }]}>
                {sensor.estado}
              </Text>
            </View>
          ))
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Regresar a Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: 'rgba(12, 11, 10, 1)' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#fff', alignSelf: 'center' },

  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C4A484',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 16,
  },
  refreshText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 8,
  },

  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sensorTipo: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  sensorValor: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  sensorEstado: { fontSize: 14 },
  button: {
    marginTop: 30,
    backgroundColor: '#884C4C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});