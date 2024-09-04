import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'; // Where your HomeScreen is located
import ClassesScreen from '../screens/ClassesScreen'; // Where your ClassesScreen is located
import ProfileScreen from '../screens/ProfileScreen'; // Where your ProfileScreen is located

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Classes" component={ClassesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
