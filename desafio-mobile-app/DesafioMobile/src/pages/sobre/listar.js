import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage'

import * as DBFunc from './dbfunc'

import Styles from './styles'

const db = openDatabase("myDatabase.db", "1.0", 200000, DBFunc.openCB(), DBFunc.errorCB());

export default function Listar() {
  const [items, setItems] = useState([]);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS table_comment(id INTEGER PRIMARY KEY AUTOINCREMENT, tag_name VARCHAR(20), comment VARCHAR(50))', []);
      tx.executeSql('SELECT * FROM table_comment', [], (tx, results) => {
        var temp = [];
        if (results.rows.length !== 0) {
          setHasData(true);
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          setItems(temp);
        }
      });
    });
  }, [items]);

  return(
    <View>
    </View>
  )
}