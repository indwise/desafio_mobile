import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage'

import * as DBFunc from './dbfunc'

import Styles from './styles'

const db = openDatabase("myDatabase.db", "1.0", 200000, DBFunc.openCB(), DBFunc.errorCB());

export default function ExpComment({ route, navigation }) {
  const [update, setUpdate] = useState(false);
  const [newTagName, setNewTagName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [tagNameLen, setTagNameLen] = useState(20);
  const [commentLen, setcommentLen] = useState(150);

  const { tag_name } = route.params;
  const { comment } = route.params;
  const { id } = route.params;

  useEffect(() => {
    setNewTagName(tag_name);
    setNewComment(comment);
  }, []);

  function deleteItem(id) {
    db.transaction((tx) => {
      tx.executeSql('DELETE FROM table_comment WHERE id=?', [id], (tx, results) => {
        console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              console.log('Deletado com sucesso !')
            }
      });
    });
    navigation.navigate('Banco');
  }

  function updateItem(newTagName, newComment, id) {
    if (newTagName.length === 0 || newComment.length === 0) {
      Alert.alert('Falha ao alterar comentário !', 'Por favor informe uma tag name e/ou comentário válido.', 
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        { text: 'Ok', onPress: () => console.log('OK Pressed')}
      ]);
    }
    else {
      db.transaction((tx) => {
        tx.executeSql('UPDATE table_comment SET tag_name=(?), comment=(?) WHERE id=(?)', [newTagName, newComment, id], (tx, results) => {
          console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                console.log('Alterado com sucesso !')
              }
        });
      })
      setUpdate(false);
      navigation.navigate('Banco');
    }
  }

  return(
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
      <View style={Styles.viewTextExpComment}>
        <Text style={Styles.textExpComment}>Tag Name</Text> 
        <View style={{ flex: 1, justifyContent: 'center' }}>
          { update ? 
          <View>
            <TextInput 
            style={Styles.tagNameTI} 
            defaultValue={tag_name}
            maxLength={20}
            onChangeText={(val) => {
              setNewTagName(val)
              const maxLength = 20;
              setTagNameLen(maxLength - val.length);
              }
            }
            />
            <Text style={{ color: '#989e99' }}>({tagNameLen} caracteres restantes)</Text>
          </View>
          : 
            <Text style={Styles.tagNameTxt}>{ tag_name }</Text>
          }
        </View>
      </View>
      <View style={Styles.viewTextExpComment}>
        <Text style={Styles.textExpComment}>Comment</Text>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          { update ?
          <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput 
          style={Styles.commentTI} 
          defaultValue={comment}
          multiline
          maxLength={150}
          onChangeText={(val) => {
            setNewComment(val);
            const maxLength = 150;
            setcommentLen(maxLength - val.length);
          }
          }
          />
          <Text style={{ color: '#989e99' }}>({commentLen} caracteres restantes)</Text>
        </View>
        :
          <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={Styles.commentTxt}>{ comment }</Text>
          </View>
        }
        </View>
      </View>
      { update ?
      <View>
        <TouchableOpacity style={Styles.buttonSalvar} onPress={() => updateItem(newTagName, newComment, id)}>
          <Text style={Styles.buttonText}>Salvar Comentário</Text>
        </TouchableOpacity>
      </View>
      :
      <View style={Styles.deleteUpdateView}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => setUpdate(true)}>
          <Image source={require('./img/alterar.png')} style={Styles.alterarImage}/>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => deleteItem(id)}>
          <Image source={require('./img/deletar.png')} style={Styles.deletarImage}/>
        </TouchableOpacity>
      </View>
    </View>
      }
    </View>
  )
}
