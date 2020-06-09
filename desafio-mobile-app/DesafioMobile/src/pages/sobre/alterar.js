import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage'

import * as DBFunc from './dbfunc'

import Styles from './styles'

const db = openDatabase("myDatabase.db", "1.0", 200000, DBFunc.openCB(), DBFunc.errorCB());

export default function Alterar() {
  const [tagName, setTagName] = useState('');
  const [comment, setComment] = useState('');
  
}