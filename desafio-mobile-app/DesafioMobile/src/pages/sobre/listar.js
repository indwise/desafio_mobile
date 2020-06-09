import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, FlatList, ImageBackground, Image, TouchableOpacity, Button, ActivityIndicator, Modal } from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage'

import * as DBFunc from './dbfunc'

import Styles from './styles'

const db = openDatabase("myDatabase.db", "1.0", 200000, DBFunc.openCB(), DBFunc.errorCB());

function clearDB() {
  db.transaction((tx) => {
    tx.executeSql('DROP TABLE table_comment', [], (tx, resultado) => {    
      console.log('DataBase deleted');
  })
  });
}

function deleteItem(id) {
  db.transaction((tx) => {
    tx.executeSql('DELETE FROM table_comment WHERE id=?', [id], (tx, results) => {
      console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            console.log('Deletado com sucesso !')
          }
    });
  });
}

function addItem(tag_name, comment) {
  db.transaction((tx) => {
    tx.executeSql('INSERT INTO table_comment (tag_name, comment) VALUES (?,?)', [tag_name, comment], (tx, results) => {
      if (results.rowsAffected > 0) {
        console.log('Adicionado comsucesso !')
      }
    });
  });
}

function addItemTest(tag_name, comment) {
  db.transaction((tx) => {
    tx.executeSql('INSERT INTO table_comment (tag_name, comment) VALUES (?,?)', [tag_name, comment], (tx, results) => {
      if (results.rowsAffected > 0) {
        console.log('Adicionado comsucesso !')
      }
    });
  });
}

export default function Listar({ navigation, state }) {
  const [items, setItems] = useState([]);
  const [hasData, setHasData] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);


   useEffect(() => {  
    clearDB();
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS table_comment(id INTEGER PRIMARY KEY AUTOINCREMENT, tag_name VARCHAR(20), comment VARCHAR(150))', []);
      tx.executeSql('SELECT * FROM table_comment', [], (tx, results) => {
        var temp = [];
        if (results.rows.length > 0) {
          setHasData(true);
          for (let i = 0; i < results.rows.length; ++i) {
           temp.push(results.rows.item(i));
         }
         setItems(temp);
        }
        setLoading(false);
     });
    });
  }, [hasData]);

  return(
    <ImageBackground source={require('./img/background-img.png')} style={Styles.backgroundImage}>
      { isLoading ? <ActivityIndicator size="large" color="#ffa500" /> : (
        <View>
        { hasData ?
          <View>

            
            <FlatList
            style={Styles.list}
            keyExtractor={(item) => item.id}
            data={items}
            renderItem={({ item }) => (

              <View style={Styles.listItem}>
                <View style={Styles.iconsContainer}>
                  <TouchableOpacity style={Styles.alterarTouch}>
                    <Image source={require('./img/alterar.png')} style={Styles.alterarImage} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={ deleteItem(item.id) }>
                    <Image source={require('./img/deletar.png')} style={Styles.deletarImage} />
                  </TouchableOpacity>    
                </View>
                <View style={Styles.indListItem}>
                  <Text style={Styles.labelTitle}>Tag Name: </Text> 
                  <Text style={Styles.insideText}>{item.tag_name}</Text>
                </View>
                <View style={Styles.indListItem}>
                  <Text style={Styles.labelTitle}>Comentário: </Text> 
                  <Text style={Styles.insideText}>{item.comment.slice(0, 20)}...</Text>
                </View>
                <View style={Styles.expListItem}>
                  <TouchableOpacity>
                    <Text style={{ color: '#575757' }}>Clique aqui para expandir</Text> 
                  </TouchableOpacity>
                </View>
              </View>
  
            )}
            />

            <View style={Styles.adicionarView}>
              <TouchableOpacity style={Styles.adicionarTouch}>
                <Image source={require('./img/adicionar.png')} style={Styles.adicionarImage} />
              </TouchableOpacity>
            </View>

          </View>

          : 
          <View>

            <View>
              <Text style={Styles.requestText}>Adicione seu primeiro comentário !</Text> 
            </View>

            <View style={Styles.adicionarView}>
            <TouchableOpacity style={Styles.adicionarTouch}>
              <Image source={require('./img/adicionar.png')} style={Styles.adicionarImage} />
            </TouchableOpacity>
            </View>

          </View>
           
        }
        </View>
      
  )}

    </ImageBackground>
    
  )
}