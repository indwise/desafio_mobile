import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'

import Home from './pages/home/home'
import Dados from './pages/dados/dados'
import Banco from './pages/sobre/banco'

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerTransparent: true,
          headerTintColor: '#ffa500',
          headerTitleAlign: 'center'

        }}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false  }} />
        <Stack.Screen name="Dados" component={Dados} />
        <Stack.Screen name="Banco" component={Banco} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}