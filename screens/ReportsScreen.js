import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

export default function ReportsScreen() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [reportType, setReportType] = useState('URGENTE');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const API_URL = 'http://192.168.1.110:3000/api/reports';

  const fetchReports = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Error al obtener reportes');
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error('Error fetching reports:', error);
      Alert.alert('Error', 'No se pudieron obtener los reportes');
    } finally {
      setLoading(false);
    }
  };

  const createReport = async () => {
    if (!latitude || !longitude || !descripcion) {
      Alert.alert('Faltan campos', 'Completa todos los campos del reporte');
      return;
    }

    try {
      const newReport = {
        userId: '123', // puedes cambiar esto por un ID real
        reportType,
        location: {
          type: 'Point',
          coordinates: [parseFloat(longitude), parseFloat(latitude)],
        },
        data: { descripcion },
        status: 'PENDIENTE',
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReport),
      });

      if (!response.ok) throw new Error('No se pudo crear el reporte');

      Alert.alert('Éxito', 'Reporte creado correctamente');
      setDescripcion('');
      setLatitude('');
      setLongitude('');
      fetchReports(); // Actualiza la lista
    } catch (error) {
      console.error('Error creando reporte:', error);
      Alert.alert('Error', 'No se pudo crear el reporte');
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const renderReportItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.type}>{item.reportType}</Text>
      <Text style={styles.status}>Estado: {item.status}</Text>
      <Text style={styles.date}>
        Creado: {new Date(item.createDate).toLocaleString()}
      </Text>
      <Text style={styles.coords}>
        Ubicación: {item.location.coordinates.join(', ')}
      </Text>
      <Text style={styles.details}>Datos: {JSON.stringify(item.data)}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Nuevo Reporte</Text>

      <TextInput
        style={styles.input}
        placeholder="Latitud"
        placeholderTextColor="#888"
        value={latitude}
        onChangeText={setLatitude}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Longitud"
        placeholderTextColor="#888"
        value={longitude}
        onChangeText={setLongitude}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        placeholderTextColor="#888"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <TouchableOpacity style={styles.button} onPress={createReport}>
        <Text style={styles.buttonText}>Crear Reporte</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Lista de Reportes</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#4A9A2C" />
      ) : reports.length === 0 ? (
        <Text style={styles.noReportsText}>No hay reportes disponibles.</Text>
      ) : (
        <FlatList
          data={reports}
          keyExtractor={(item) => item._id}
          renderItem={renderReportItem}
          scrollEnabled={false}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#4A9A2C',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  type: {
    color: '#4A9A2C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    color: '#fff',
    marginTop: 8,
  },
  date: {
    color: '#aaa',
    marginTop: 4,
  },
  coords: {
    color: '#ccc',
    marginTop: 4,
  },
  details: {
    color: '#bbb',
    marginTop: 8,
    fontStyle: 'italic',
  },
  noReportsText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
  },
});