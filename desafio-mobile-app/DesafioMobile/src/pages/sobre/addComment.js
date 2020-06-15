import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage'

import * as DBFunc from './dbfunc'

import Styles from './styles'


const db = openDatabase("myDatabase.db", "1.0", 200000, DBFunc.openCB(), DBFunc.errorCB());

export default function AddComment({ route, navigation }) {
  const [tagName, setTagName] = useState('');
  const [comment, setComment] = useState('');
  const [tagNameLen, setTagNameLen] = useState(20);
  const [commentLen, setcommentLen] = useState(150);

  function addItem(tag_name, comment) {
    if (tag_name.length === 0 || comment.length === 0) {
      Alert.alert('Please type a tag name and/or comment !');
    }
    else {
      db.transaction((tx) => {
        tx.executeSql('INSERT INTO table_comment (tag_name, comment) VALUES (?,?)', [tag_name, comment], (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log('Adicionado com sucesso !')
          }
        });
      });
      navigation.navigate('Banco');
    }
  }

  return(
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
      <View style={Styles.viewTextExpComment}>
        <Text style={Styles.textExpComment}>Tag Name</Text> 
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput 
          style={Styles.tagNameTI} 
          placeholder='Digite sua tag name...'
          maxLength={20}
          onChangeText={(val) => {
            setTagName(val);
            const maxLength = 20;
            setTagNameLen(maxLength - val.length);
            }
          }
          />
        <Text style={{ color: '#989e99' }}>({tagNameLen} caracteres restantes)</Text>
        </View>
      </View>
      <View style={Styles.viewTextExpComment}>
        <Text style={Styles.textExpComment}>Comment</Text>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput 
          style={Styles.commentTI} 
          placeholder='Digite seu comentário...'
          multiline
          maxLength={150}
          onChangeText={(val) => {
            setComment(val);
            const maxLength = 150;
            setcommentLen(maxLength - val.length);
          }
          }
          />
          <Text style={{ color: '#989e99' }}>({commentLen} caracteres restantes)</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={Styles.buttonSalvar} onPress={() => addItem(tagName, comment)}>
          <Text style={Styles.buttonText}>Salvar Comentário</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
