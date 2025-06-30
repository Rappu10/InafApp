import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <LinearGradient
          colors={['#F5E9DA', '#C4A484']}
          style={styles.gradientBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
          <Image
            source={require('../assets/header-trees.png')}
              style={[
                styles.headerImage,
                {
                  height: 520,
                  position: 'absolute',
                  width: '100%',
                  zIndex: 0,
                  left: 20, 
                  top: -60,
                }
              ]}
              blurRadius={0}
            />

              {/* Logo */}
            <Image source={require('../assets/totec-logo.png')} style={styles.logoImage} />
            {/* El degradado corregido */}
          <LinearGradient
          colors={['#110E0A', '#5F462C']}
          style={styles.gradientBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          />
          /* Formulario */
            <View style={styles.form}>
              <Text style={styles.label}>Usuario</Text>
              <TextInput
                placeholderTextColor="#494949"
                style={[
              styles.input,
              { fontFamily: 'Inter', backgroundColor: 'rgba(204, 204, 204, 1)', color: '#000' }
                ]}
              />
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                placeholderTextColor="#494949"
                secureTextEntry
                style={[
              styles.input,
              { fontFamily: 'Inter', backgroundColor: 'rgba(204, 204, 204, 1)', color: '#000' }
                ]}
              />
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity
              style={[styles.button, { width: 140, height: 40 }]}
              onPress={() => navigation.navigate('Main', { screen: 'Home' })}
                >
              <Text style={[styles.buttonText, { fontFamily: 'Inter', fontSize: 15, color: '#fff' }]}>
                Iniciar Sesión
              </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Información inferior */}
      <View style={[styles.bottomContent, { alignItems: 'flex-start', width: '100%' }]}>
        <Text style={[styles.bienvenido, { fontFamily: 'Inter' }]}>BIENVENIDO</Text>
        <Text style={[styles.descripcion, { fontFamily: 'Inter', color: 'rgb(34, 34, 34)' }]}>
          Plataforma Inteligente de Monitoreo Agrícola para Nogalera
        </Text>

        {/* Contenedor de la nuez con overlay */}
        <View style={styles.nuezWrapper}>
          <Image source={require('../assets/nuez.png')} style={styles.nuezFrontal} />
          <Image source={require('../assets/nuez-overlay.png')} style={styles.nuezOverlay} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    position: 'relative',
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -2,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    zIndex: -1,
    opacity: 0.2,
  },
  logoImage: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 60,
    marginTop: 60, 
  },
  form: {
    marginBottom: 40,
  },
  label: {
    color: '#CCCCCC',
    marginBottom: 4,
    marginLeft: 4,
    fontFamily: 'Inter',
  },
  input: {
    backgroundColor: '#2C2C2C',
    color: '#FFFFFF',
    paddingHorizontal: 16,
    height: 52,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#C4A484',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomContent: {
    marginTop: 30,
  },
  bienvenido: {
    color: '#888',
    letterSpacing: 1,
    fontSize: 12,
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 14,
    textAlign: 'left',
    marginHorizontal: 4,
    },

    // 🔽 Estilos para la superposición de nuez
  nuezWrapper: {
    width: '100%',
    aspectRatio: 1.2,
    marginTop: 16,
    position: 'relative',
    alignSelf: 'center',
    },
    nuezFrontal: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    },
    nuezOverlay: {
    width: '200%',
    height: '200%',
    resizeMode: 'contain',
    position: 'absolute',
    top: -160,
    left: -200,
    zIndex: 2,
    opacity: 15, 
  },
});