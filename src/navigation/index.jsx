import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { OnboardingScreen } from '../screens/Onboarding/OnboardingScreen';
import { HomeScreen }       from '../screens/Home/HomeScreen';
import { LessonScreen }     from '../screens/Lesson/LessonScreen';
import { ProfileScreen }    from '../screens/Profile/ProfileScreen';
import { COLORS } from '../constants';

const Stack = createNativeStackNavigator();
const Tab   = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.textLight,
      tabBarStyle: { borderTopWidth: 0, elevation: 10 },
    }}>
      <Tab.Screen name="Home"    component={HomeScreen}
        options={{ tabBarLabel: 'Início', tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>🏠</Text> }} />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{ tabBarLabel: 'Perfil', tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>🌿</Text> }} />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="MainTabs"   component={Tabs} />
        <Stack.Screen name="Lesson"     component={LessonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
