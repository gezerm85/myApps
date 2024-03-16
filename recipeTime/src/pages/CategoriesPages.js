import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch'
import { Loading, Error, CategoryCard } from '../components'

const CategoriesPages = ({navigation}) => {

  const { data, loading, error, } = useFetch(process.env.EXPO_PUBLIC_API_URL);

  const renderCategories = ({item}) => {
    return <CategoryCard categories={item} onSelect={ () => handleCategoriesSelect (item.strCategory)}/>
  }
    
  const handleCategoriesSelect = (strCategory) => {
    navigation.navigate('MealsPages', {strCategory})
  }

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  return (
    <FlatList style={styles.container} data={data.categories} renderItem={renderCategories}  />
  )
}

export default CategoriesPages

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ff8f06'
  }
})