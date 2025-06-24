import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={styles.menuButton}
      >
        <Text style={{ fontSize: 24 }}>☰</Text>
      </TouchableOpacity>

      <Image source={require('../assets/header-trees.png')} style={styles.headerImage} />

      <View style={styles.content}>
        <Text style={styles.subtitle}>BIENVENIDO</Text>
        <Text style={styles.title}>
          Sistema Monitoreo y Conservación <Text style={styles.green}>Forestal</Text>
        </Text>
        <Text style={styles.description}>
          La conservación forestal enfrenta desafíos como la detección tardía de incendios, la falta
          de monitoreo...
        </Text>
        <TouchableOpacity
          style={styles.greenButton}
          onPress={() => navigation.navigate('Main', { screen: 'About' })}
        >
          <Text style={styles.greenButtonText}>Saber +</Text>
        </TouchableOpacity>

        <View style={styles.profileCard}>
          <Text style={styles.profileTitle}>INTEGRANTES</Text>

          <Text style={styles.profileName}>Francisco Cervantes</Text>
          <Text style={styles.role}>FullStack</Text>
        </View>
      </View>
    </ScrollView>
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
  subtitle: { color: '#444', fontSize: 12 },
  title: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  green: { color: '#4A9A2C' },
  description: { fontSize: 14, color: '#555', marginBottom: 20 },
  greenButton: {
    backgroundColor: '#4A9A2C',
    borderRadius: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  greenButtonText: { color: 'white', fontWeight: 'bold' },
  profileCard: {
    backgroundColor: '#CFE0C3',
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 30,
    padding: 16,
  },
  profileTitle: { fontWeight: 'bold', color: '#333', fontSize: 14 },
  profileName: { fontWeight: 'bold', fontSize: 16, color: '#222' },
  role: {
    backgroundColor: '#222',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 6,
  },
});