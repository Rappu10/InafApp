import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';

// Icon mapping for each screen
const screenIcons = {
  Home: 'home-outline',
  Sensores: 'speedometer-outline',
  Map: 'map-outline',
  About: 'information-circle-outline',
  Reports: 'document-text-outline',
  Mapa: 'map-outline',
  Reportes: 'document-text-outline',
};

import HomeScreen from '../screens/HomeScreen';
import SensoresScreen from '../screens/SensoresScreen';
import AboutScreen from '../screens/AboutScreen';
import MapScreen from '../screens/MapScreen';
import ReportsScreen from '../screens/ReportsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainStack({ onLogout }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home">
        {() => <HomeScreen onLogout={onLogout} />}
      </Stack.Screen>
      <Stack.Screen name="Sensores" component={SensoresScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Reports" component={ReportsScreen} />
    </Stack.Navigator>
  );
}

function DrawerNavigator({ onLogout }) {
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
      <Drawer.Screen name="Main">
        {() => <MainStack onLogout={onLogout} />}
      </Drawer.Screen>
      <Drawer.Screen name="Sensores" component={SensoresScreen} />
      <Drawer.Screen name="Mapa" component={MapScreen} />
      <Drawer.Screen name="Reportes" component={ReportsScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  const [role, setRole] = useState(null); // null = no logueado

  const handleLogin = (newRole) => {
    setRole(newRole); // puede ser 'admin', 'user', 'guest', etc.
  };

  const handleLogout = () => {
    setRole(null); // Esto vuelve a LoginScreen
  };

  return (
    <NavigationContainer>
      {role ? (
        <DrawerNavigator onLogout={handleLogout} />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login">
            {() => <LoginScreen onLogin={handleLogin} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}