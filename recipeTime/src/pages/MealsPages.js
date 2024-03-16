import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch'
import { MealsCard, Loading, Error, } from '../components'

const MealsPages = ({route, navigation,  }) => {
  const { strCategory } = route.params
  const { data, loading, error, } = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + strCategory);

  
  const renderMeals =({item}) => ( 
    <MealsCard data={item} onSelect={() => handleCategoriesSelect (item.idMeal)}/>
    )
    const handleCategoriesSelect = (idMeal) => {
      navigation.navigate('DetailPages', {idMeal}) 
    }

    if(loading){
      return <Loading/>
    }
  
    if(error){
      return <Error/>
    }

  return (
    <FlatList style={styles.container}  data={data.meals} renderItem={renderMeals} />
  )
}

export default MealsPages

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ff8f06'
  }
})
