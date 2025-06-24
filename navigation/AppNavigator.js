import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SensoresScreen from '../screens/SensoresScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sensores" component={SensoresScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Main" component={MainStack} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Sensores" component={SensoresScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}