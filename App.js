import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Store from './src/Store'
import MainNavigator from './src/navigators/MainNavigator'


export default () => (
  <Provider store={Store}>
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  </Provider>
)