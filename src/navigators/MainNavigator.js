import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';

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
      <MainStack.Screen name="Login" component={Login} />
    </MainStack.Navigator>
  );
}