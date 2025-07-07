import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SensoresScreen from '../screens/SensoresScreen';
import AboutScreen from '../screens/AboutScreen';
import MapScreen from '../screens/MapScreen'; 

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: false,
        drawerStyle: { backgroundColor: 'rgba(12, 11, 10, 1)' },
        drawerActiveTintColor: '#E9ECF0',
        drawerInactiveTintColor: '#7A7A7A',
        drawerItemStyle: { borderBottomWidth: 0.3, borderBottomColor: '#333' },
      })}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          title: 'Inicio',
        }}
      />
      <Drawer.Screen
        name="Sensores"
        component={SensoresScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="hardware-chip-outline" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Map"
        component={MapScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="map" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="information-circle-outline" size={size} color={color} />,
          title: 'Quiénes Somos',
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={() => null}
        options={{
          drawerLabel: 'Cerrar Sesión',
          drawerIcon: ({ color, size }) => <Ionicons name="log-out-outline" size={size} color={color} />,
          drawerItemStyle: { borderTopWidth: 0.5, borderTopColor: '#333' },
        }}
        listeners={({ navigation }) => ({
          drawerItemPress: async (e) => {
            e.preventDefault();
            await AsyncStorage.clear();
            Alert.alert('Sesión cerrada', 'Has cerrado sesión correctamente');
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          },
        })}
      />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('userId').then(userId => {
      setIsLogged(!!userId);
      setLoading(false);
    });
  }, []);

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLogged ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}