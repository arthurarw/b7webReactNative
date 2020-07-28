import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';


const MainStack = createStackNavigator();

export default () => {
  return (
    <MainStack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#0000FF',
        height: 80,
      },
      headerTitleStyle: {
        color: '#FFF',
        fontWeight: 'bold'
      }
    }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="About" component={AboutScreen} />
    </MainStack.Navigator>
  );
}