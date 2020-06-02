import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/home/home'

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dados" component={'dados'} />
        <Stack.Screen name="Sobre" component={'sobre'} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}