import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SensoresScreen from '../screens/SensoresScreen';
import AboutScreen from '../screens/AboutScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sensores" component={SensoresScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: 'rgba(12, 11, 10, 1)' },
        drawerActiveTintColor: '#E9ECF0',
        drawerInactiveTintColor: '#7A7A7A',
        drawerItemStyle: { borderBottomWidth: 0.3, borderBottomColor: '#333' },
      }}
    >
      <Drawer.Screen
        name="Main"
        component={MainStack}
        options={{ title: 'Inicio' }}
      />
      <Drawer.Screen name="Sensores" component={SensoresScreen} />
      <Drawer.Screen name="Map" component={MapScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    async function fetchRole() {
      try {
        const storedRole = await AsyncStorage.getItem('role');
        if (storedRole && storedRole !== 'undefined' && storedRole !== '') {
          setRole(storedRole);
        } else {
          setRole(null);
        }
      } catch (e) {
        console.error('Error leyendo rol:', e);
        setRole(null);
      } finally {
        setLoading(false);
      }
    }
    fetchRole();
  }, []);

  if (loading) return null;

  return (
    <NavigationContainer>
      {role ? <DrawerNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}