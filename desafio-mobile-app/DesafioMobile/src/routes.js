import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton, HeaderTitle } from '@react-navigation/stack'

import Home from './pages/home/home'
import Dados from './pages/dados/dados'
import Listar from './pages/sobre/listar'
import { color } from 'react-native-reanimated'
import ExpComment from './pages/sobre/expComment'
import AddComment from './pages/sobre/addComment'

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerTransparent: false,
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ffa500'
          }
        }}>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false  }} 
        />
        <Stack.Screen 
          name="Dados" 
          component={Dados} 
          headerStyle={{ backgroundColor: '#ffa500' }} 
          options={{ title: 'Sails.js Releases' }}
        />
        <Stack.Screen 
          name="Banco" 
          component={Listar} 
          headerStyle={{ backgroundColor: '#ffa500' }} 
          options={{ title: 'Comentarios' }}
        />
        <Stack.Screen 
          name="ExpComment" 
          component={ExpComment} 
          headerStyle={{ backgroundColor: '#ffa500' }} 
          options={{ title: 'Comentário Completo' }}
        />
        <Stack.Screen 
          name="AddComment" 
          component={AddComment} 
          headerStyle={{ backgroundColor: '#ffa500' }} 
          options={{ title: 'Comentário Completo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}