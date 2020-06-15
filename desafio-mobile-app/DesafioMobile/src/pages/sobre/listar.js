import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { View, Text, FlatList, ImageBackground, Image, TouchableOpacity, Button, ActivityIndicator, Modal, TouchableHighlight } from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage'

import * as DBFunc from './dbfunc'

import Styles from './styles'

const db = openDatabase("myDatabase.db", "1.0", 200000, DBFunc.openCB(), DBFunc.errorCB());


export default function Listar({ route, navigation }) {
  const [items, setItems] = useState([]);
  const [hasData, setHasData] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [itemsQnt, setItemsQnt] = useState(0);

  const isFocused = useIsFocused();

  function clearDB() {
    db.transaction((tx) => {
      tx.executeSql('DROP TABLE table_comment', [], (tx, resultado) => {    
        console.log('DataBase deleted');
      })
    });
    setItemsQnt(0);
  }
  


   useEffect(() => {  
      db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS table_comment(id INTEGER PRIMARY KEY AUTOINCREMENT, tag_name VARCHAR(20), comment VARCHAR(150))', []);
      tx.executeSql('SELECT * FROM table_comment', [], (tx, results) => {
        var temp = [];
        setItemsQnt(results.rows.length);
        if (results.rows.length > 0) {
          setHasData(true);
          for (let i = 0; i < results.rows.length; ++i) {
           temp.push(results.rows.item(i));
         }
         setItems(temp);
        }
        else {
          setHasData(false)
        }
        setLoading(false);
     });
    });
  }, [isFocused]);

  return(
    <ImageBackground source={require('./img/background-img.png')} style={Styles.backgroundImage}>
      { isLoading ? <ActivityIndicator size="large" color="#ffa500" /> : (
        <View>
        { hasData ?
          <View>

            <View style={Styles.adicionarView}>
              <TouchableOpacity style={Styles.adicionarTouch} onPress={() => navigation.navigate('AddComment')}>
                <Image source={require('./img/adicionar.png')} style={Styles.adicionarImage} />
              </TouchableOpacity>
            </View>
            
            <FlatList
            keyExtractor={(item) => item.id}
            data={items}
            renderItem={({ item }) => (

              <View style={Styles.listItem}>
                <View style={Styles.indListItem}>
                  <Text style={Styles.labelTitle}>Tag Name: </Text> 
                  <Text style={Styles.insideText}>{item.tag_name}</Text>
                </View>
                <View style={Styles.indListItem}>
                  <Text style={Styles.labelTitle}>Comentário: </Text> 
                  { item.comment.length > 20 ? <Text>{item.comment.slice(0,20)}...</Text> : <Text>{item.comment}</Text> }
                </View>
                <View style={Styles.expListItem}>
                  <TouchableHighlight style={Styles.expHighlight} onPress={() => navigation.navigate('ExpComment', item)}>
                    <Text style={Styles.expText}>Clique para expandir</Text>
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