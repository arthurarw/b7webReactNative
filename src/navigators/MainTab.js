import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';


import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: () => {
        let iconName = null;
        switch (route.name) {
          case 'TabHome':
            iconName = "home";
            break;
          case 'TabAbout':
            iconName = "info-with-circle"
            break;
        }
        return <Icon name={iconName} size={30} color="#000" />
      }
    })}
    tabBarOptions={{
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="TabHome" component={TabHomeScreen} options={{tabBarLabel:'Home'}} />
      <Tab.Screen name="TabAbout" component={TabAboutScreen} options={{tabBarLabel:'Sobre'}} />
    </Tab.Navigator>
  );
}