import React, { useState, useEffect } from 'react'
import { Text, FlatList, View, ActivityIndicator } from 'react-native'
import moment from 'moment'
import tz from 'moment-timezone'

import Styles from './styles'

export default function Fetch() {
  const [releases, setReleases] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://api.github.com/repos/balderdashy/sails/releases')
      .then((response) => response.json())
      .then((json) => setReleases(json.slice(0, 10)))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return(
    <View style={[Styles.container, Styles.containerFetch]}>
      { isLoading ? <ActivityIndicator size="large" color="#ffa500" /> : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={releases}
          renderItem={({ item }) => (
            <View style={Styles.viewFlatList}>
              <Text style={Styles.listText}>Created at: </Text> 
              <Text style={{ color: '#FFF' }}>{moment(item.created_at).tz('America/Sao_Paulo').format('Do MMMM YYYY, h:mm:ss a')}</Text>
              <Text style={Styles.listText}>Tag name: </Text> 
              <Text style={{ color: '#FFF' }}>{item.tag_name}</Text>
            </View>
          )}
        />
      )}
    </View>

  )
}