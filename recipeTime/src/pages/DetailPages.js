import { StyleSheet, Text, View, FlatList, } from 'react-native'
import React from 'react'
import { DetailCard, Loading, Error } from '../components'
import useFetch from '../hooks/useFetch'


const DetailPages = ({route,}) => {
  const { idMeal } = route.params
  const {data, loading, error,} = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal)

  const renderDetail = ({item}) =>(
    <DetailCard data={item}/>
  )

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  return (
    <View style={styles.container}>
      <FlatList  data={data.meals} renderItem={renderDetail} />
    </View>
    
  )
}

export default DetailPages

const styles = StyleSheet.create({
  container:{
    
  },
})
