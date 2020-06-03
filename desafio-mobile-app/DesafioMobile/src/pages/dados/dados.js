import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, ActivityIndicator, FlatList } from 'react-native'

import Styles from './styles'
import Fetch from './fetch'

export default function Dados() {
  const [shouldFetch, setShouldFetch] = useState(false);


  return(
    <View style={Styles.container}>
      <View>
        { shouldFetch ? <Fetch /> : <View style={Styles.container}><Text style={Styles.requestText}>Pressione Requisitar Dados</Text></View>}
      </View>
      <View style={Styles.containerRequisitar}>
        <TouchableOpacity style={Styles.buttonRequisitar} onPress={() => {setShouldFetch(true)}}>
          <Text style={Styles.buttonText}>Requisitar Dados</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}