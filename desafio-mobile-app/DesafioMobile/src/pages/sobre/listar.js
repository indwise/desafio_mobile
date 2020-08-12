import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { View, Text, FlatList, ImageBackground, Image, TouchableOpacity, Button, ActivityIndicator, TouchableHighlight, TextInput, Alert } from 'react-native'
import Modal from 'react-native-modal'

import { openDatabase } from 'react-native-sqlite-storage'

import * as DBFunc from './dbfunc'

import Styles from './styles'

const db = openDatabase("myDatabase.db", "1.0", 200000, DBFunc.openCB(), DBFunc.errorCB());


export default function Listar({ route, navigation }) {
  // Listagem de itens
  const [items, setItems] = useState([]);
  const [hasData, setHasData] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [tagname, setTagname] = useState('');
  const [comment, setComment] = useState('');
  const [id, setId] = useState('');

  // Modal para alterar e deletar
  const [modalVisible, setModalVisible] = useState(false);
  const [update, setUpdate] = useState(false);
  const [newTagName, setNewTagName] = useState('');
  const [newComment, setNewComment] = useState('');

  const isFocused = useIsFocused();

  function clearDB() {
    db.transaction((tx) => {
      tx.executeSql('DROP TABLE table_comment', [], (tx, resultado) => {    
        console.log('DataBase deleted');
      })
    });
  }

  function selectItems() {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM table_comment', [], (tx, results) => {
        var temp = [];
        console.log(results.rows.length);
        if (results.rows.length > 0) {
          if (hasData === false) {
            setHasData(true);
          }
          for (let i = 0; i < results.rows.length; ++i) {
           temp.push(results.rows.item(i));
         }
         setItems(temp);
        }
        else {
          setHasData(false);
          setLoading(false);
        }
     });
    });
  }

  function updateItem(newTagName, newComment, id) {
    if (newTagName.length === 0 || newComment.length === 0 || newTagName.length > 20 || newComment.length > 150) {
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
        selectItems();
      })
      setUpdate(false);
      setModalVisible(false);
    }
  }

  function deleteItem(id) {
    db.transaction((tx) => {
      tx.executeSql('DELETE FROM table_comment WHERE id=?', [id], (tx, results) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          console.log('Deletado com sucesso !')
        }
      });
      setModalVisible(false);

    });
    selectItems();

  }
  
   useEffect(() => {

      db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS table_comment(id INTEGER PRIMARY KEY AUTOINCREMENT, tag_name VARCHAR(20), comment VARCHAR(150))', []);
        selectItems();
      });
      setLoading(false);

  }, [isFocused]);


  return(
    <ImageBackground source={require('./img/background-img.png')} style={Styles.backgroundImage}>
      { isLoading ? <ActivityIndicator size="large" color="#ffa500" /> : (
        <View>

          <Modal
            isVisible={modalVisible}
            > 
              <View style={Styles.modalView} >
                <View>
                  <Text style={Styles.modalText}>Tag Name</Text>
                </View>
                <View style={Styles.viewTI}>
                  <TextInput
                  editable={update}
                  style={Styles.modalTI}
                  defaultValue={tagname}
                  maxLength={20}
                  onChangeText={(val) => {
                    setNewTagName(val)
                    }
                  }
                  />
                  { update ? <Text style={{ color: '#989e99' }}>(Max 20 restantes)</Text> : null}
                </View>
                <View>
                  <Text style={Styles.modalText}>Comment</Text>
                </View>
                <View style={Styles.viewTI}>
                <TextInput
                  editable={update}
                  style={Styles.modalTI}
                  defaultValue={comment}
                  multiline
                  maxLength={150}
                  onChangeText={(val) => {
                    setNewComment(val);
                  }
                }
                />
                { update ? <Text style={{ color: '#989e99' }}>(Max 150 caracteres)</Text> : null} 
                </View>
                { update ? 

                <View style={Styles.saveButtonView}>
                <Button onPress={() => updateItem(newTagName, newComment, id)} title='Salvar' color='#ffa500' />
                </View>
                :
                <View style={Styles.viewIcons}>
                <View style={Styles.updateIconView}>
                  <TouchableOpacity onPress={() => { setUpdate(true); setNewComment(comment); setNewTagName(tagname); }}>
                    <Image source={require('./img/alterar.png')} style={Styles.alterarImage}/>
                  </TouchableOpacity>
                </View>
                <View style={Styles.buttonCancelView}>
                  <Button onPress={() => setModalVisible(false)} title='Fechar' color='#000000' />
                </View>
                <View style={Styles.deleteIconView}>
                  <TouchableOpacity onPress={() => deleteItem(id)}>
                    <Image source={require('./img/deletar.png')} style={Styles.deletarImage}/>
                  </TouchableOpacity>
                </View>
              </View>
                }
              </View>
            </Modal>


        { hasData ?
          <View style={Styles.centeredView} >

            <View style={Styles.adicionarView}>
              <TouchableOpacity style={Styles.adicionarTouch} onPress={() => navigation.navigate('AddComment')}>
                <Image source={require('./img/adicionar.png')} style={Styles.adicionarImage} />
              </TouchableOpacity>
            </View>
            

            <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={items}
            renderItem={({ item }) => (

              <View style={Styles.listItem}>
                <View style={Styles.indListItem}>
                  <Text style={Styles.labelTitle}>Tag Name: </Text> 
                  <Text style={Styles.insideText}>{item.tag_name}</Text>
                </View>
                <View style={Styles.indListItem}>
                  <Text style={Styles.labelTitle}>Comentário: </Text> 
                  { item.comment.length > 20 ? <Text style={Styles.insideText}>{item.comment}</Text> : <Text style={Styles.insideText}>{item.comment}</Text> }
                </View>
                <View style={Styles.expListItem}>
                  <TouchableHighlight style={Styles.expHighlight} onPress={() => { setModalVisible(true); setTagname(item.tag_name); setComment(item.comment); setId(item.id); }}>
                    <Text style={Styles.expText}>Clique aqui para expandir</Text>
                  </TouchableHighlight>
                </View>
              </View>
  
            )}
            />

          </View>

          : 

          <View>

            <View style={Styles.adicionarViewWoData}>
              <TouchableOpacity style={Styles.adicionarTouch} onPress={() => navigation.navigate('AddComment')}>
                <Image source={require('./img/adicionar.png')} style={Styles.adicionarImage} />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={Styles.requestText}>Adicione seu primeiro comentário !</Text> 
            </View>

          </View>
           
        }
        </View>
      
  )}

    </ImageBackground>
    
  )
}