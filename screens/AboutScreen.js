import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Quiénes Somos</Text>
        <Text style={styles.description}>
          Somos un equipo apasionado por la tecnología y la innovación que busca transformar el mundo digital.
        </Text>

        <View style={styles.profileCard}>
          <View style={styles.profileInfo}>
            <Text style={styles.profileTitle}>Fundador</Text>
            <Text style={styles.profileName}>Jose Malacara</Text>
            <Text style={styles.role}>Dueño de la Nogalera</Text>
          </View>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.profileInfo}>
            <Text style={styles.profileTitle}>Co-Fundador</Text>
            <Text style={styles.profileName}>Pedro Said</Text>
            <Text style={styles.role}>Contacto de Referencia</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#5F462C',
  },
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    backgroundColor: '#5F462C',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
    color: '#FFFBEF',
  },
  description: {
    fontSize: 16,
    color: '#E0D6C6',
    marginBottom: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  profileCard: {
    backgroundColor: '#110E0A',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    padding: 16,
    borderWidth: 2,
    borderColor: '#88684C',
    justifyContent: 'space-between',
    width: '100%',
  },
  profileInfo: {
    flex: 1,
    marginRight: 16,
    justifyContent: 'center',
  },
  profileTitle: {
    fontWeight: 'bold',
    color: '#CFCFCF',
    fontSize: 14,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
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
    overflow: 'hidden',
  },
  mapContainer: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 16,
    borderWidth: 2,
    borderColor: '#88684C',
  },
  map: {
    flex: 1,
  },
});