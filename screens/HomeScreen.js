import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: 'rgba(0, 0, 0, 1)', flex: 1 }]}>
      <Image
        source={require('../assets/header-trees.png')}
        style={[
          styles.headerImage,
          {
            height: 420,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 0,
          },
        ]}
        blurRadius={0}
      />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 0 }}
      >
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={styles.menuButton}
        >
          <Text style={{ fontSize: 24, color: '#fff' }}>☰</Text>
        </TouchableOpacity>

        <View style={[styles.content, { zIndex: 1 }]}>
          <Text style={[styles.subtitle, { color: '#fff' }]}>BIENVENIDO</Text>
          <Text style={[styles.title, { color: '#fff' }]}>
            Plataforma Inteligente de Monitoreo Agrícola para <Text style={styles.green}>Nogalera</Text>
          </Text>
          <Text style={[styles.description, { color: '#ccc' }]}>
            La conservación forestal enfrenta desafíos como la detección tardía de incendios, la falta de monitoreo en tiempo real de condiciones ambientales (temperatura, humedad, calidad de aire) y la dificultad para identificar especies o actividades humanas no autorizadas en zonas protegidas. Estos problemas limitan la capacidad de respuesta ante emergencias y la protección efectiva de los ecosistemas.
          </Text>
          <TouchableOpacity
            style={styles.greenButton}
            onPress={() => navigation.navigate('Main', { screen: 'About' })}
          >
            <Text style={styles.greenButtonText}>Saber +</Text>
          </TouchableOpacity>

          <View style={styles.profileCard}>
            <View style={{ flex: 1 }}>
              <Text style={[
                styles.profileTitle,
                { fontFamily: 'IstokWeb-Regular', marginBottom: 8, color: '#fff' }
              ]}>INTEGRANTES</Text>
              <Text style={[
                styles.profileName,
                { fontFamily: 'InstrumentSans-Regular', marginBottom: 8, color: '#C1C1C1BD' }
              ]}>Francisco</Text>
              <Text style={[
                styles.profileName,
                { fontFamily: 'InstrumentSans-Regular', marginBottom: 8, color: '#C1C1C1BD' }
              ]}>Cervantes</Text>
              <Text style={[styles.role, { marginTop: 12 }]}>FullStack</Text>
            </View>
            <Image
              source={require('../assets/fco.png')} 
              style={{ width: 160, height: 160, borderRadius: 40, marginVertical: 16, marginLeft: 0 }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#F2F2F2' },
  menuButton: {
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  headerImage: { width: '100%', height: 100, resizeMode: 'cover' },
  content: { padding: 24 },
  subtitle: { color: '#101010', fontSize: 12, textAlign: 'left', alignSelf: 'flex-start' },
  title: { fontSize: 22, fontWeight: 'bold', marginVertical: 10, textAlign: 'left', alignSelf: 'flex-start' },
  green: { color: '#4A9A2C' },
  description: { fontSize: 14, color: '#555', marginBottom: 20, textAlign: 'left', alignSelf: 'flex-start' },
  greenButton: {
    backgroundColor: '#4A9A2C',
    borderRadius: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  greenButtonText: { color: 'white', fontWeight: 'bold' },
  profileCard: {
    backgroundColor: '#101010',
    borderRadius: 16,
    flexDirection: 'row', // Imagen a la derecha, texto a la izquierda
    alignItems: 'center',
    marginTop: 30,
    padding: 16,
    borderWidth: 2,
    borderColor: '#88684C',
    justifyContent: 'space-between',
  },
  profileInfo: {
    flex: 1,
    marginRight: 16,
    justifyContent: 'center',
  },
  profileTitle: { 
    fontWeight: 'bold', 
    color: '#333', 
    fontSize: 14,
  },
  profileName: { fontWeight: 'bold', fontSize: 16, color: '#222' },
  role: {
    backgroundColor: '#222',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 6,
    borderWidth: 1,
    borderColor: 'rgba(32, 32, 32, 0.87)',
    alignSelf: 'flex-start',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginLeft: 8,
  },
});