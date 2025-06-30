import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Importa Ionicons

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SensoresScreen from '../screens/SensoresScreen';
import AboutScreen from '../screens/AboutScreen';
import MapScreen from '../screens/MapScreen'; 

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sensores" component={SensoresScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'rgba(12, 11, 10, 1)',
          },
          drawerActiveTintColor: '#E9ECF0',   // texto e ícono activos (claro)
          drawerInactiveTintColor: '#7A7A7A', // texto e ícono inactivos (gris)
        }}
      >
        <Drawer.Screen
          name="Main"
          component={MainStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
            title: 'Inicio',
          }}
        />
        <Drawer.Screen
          name="Sensores"
          component={SensoresScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="hardware-chip-outline" size={size} color={color} />
            ),
          }}
        />
          <Drawer.Screen
          name="Map"
          component={MapScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="map" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}