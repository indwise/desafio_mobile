import React, { useState, useEffect } from 'react'
import { View, Text, Alert } from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage'

import * as DBFunc from './dbfunc'

import Styles from './styles'

const db = openDatabase("myDatabase.db", "1.0", 200000, DBFunc.openCB(), DBFunc.errorCB());

export default function Adicionar({ navigation }) {
  const [tagName, setTagName] = useState('');
  const [comment, setComment] = useState('');
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    adicionarComentario = () => {
      if (hasData) {
        if (tagName && comment) {
          db.transaction((tx) => {
            tx.executeSql('INSERT INTO table_comment (tagName, comment) VALUES (?,?,?)', [tagName, comment], (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                Alert.alert('Success', 'Comment added successfully', [{ text: 'OK', onPres: () => { navigation.navigate('Banco') } }], { cancelable: false });
              } 
              else {
                alert('Failed');
              }
            })
          });
        }
      };
      }
  }, [hasData]);

  return(
    <Text></Text>
  )

}