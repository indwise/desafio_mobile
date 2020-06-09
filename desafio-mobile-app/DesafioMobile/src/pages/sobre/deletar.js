import React, { useState, useEffect } from 'react'
import { Modal, Text } from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage'

import * as DBFunc from './dbfunc'

const db = openDatabase("myDatabase.db", "1.0", 200000, DBFunc.openCB(), DBFunc.errorCB());

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

export default function Deletar({ item, navigation }) {
  const [isDeleted, setDeleted] = useState(false);
  
  useEffect(() => {
    deleteItem(item.id);
  });
  
  return(
    <Modal>
      <Text>Deletado</Text>
      <Button onPress={ () => navigation.navigate('Banco'), false }>Voltar</Button>
    </Modal>
  )
}