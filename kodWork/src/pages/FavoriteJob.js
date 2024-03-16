import { StyleSheet, Text, View, FlatList, } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FavoriteCard } from '../components'
import { favRemove } from '../redux/slice'


const FavoriteJob = () => {


  const favList = useSelector(state => state.favorite.favList)
  const dispatch = useDispatch();



  if (favList.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>Henüz favori iş ilanınız bulunmamaktadır.</Text>
      </View>
    );
  }

  const removeFavorite = (id) => {
    dispatch(favRemove(id)); // Redux'a favoriden kaldırma işlemini gönderir
  };


  const renderList = ({item}) =>(
    <FavoriteCard data={item} removeOnPress={() => removeFavorite (item.id)}/>
  )

  

  return (
    <View>
      <FlatList data={favList} renderItem={renderList} keyExtractor={(item, index) => index.toString()} />
    </View>
  )
}

export default FavoriteJob

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
  },
})