import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import Listar from './listar'
import Deletar from './deletar'

export default function CommentComp() {

  return(
    <View>
      <Listar />
    </View>
  )
}