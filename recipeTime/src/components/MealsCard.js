import { StyleSheet, Text, View, Image, Pressable,ImageBackground  } from 'react-native'
import React from 'react'

const MealsCard = ({data, onSelect}) => {
  return (
    <Pressable onPress={onSelect} >
      <View style={styles.container}>
        
        <ImageBackground style={styles.bgImage} source={{uri: data.strMealThumb }} borderRadius={10} >
        <Text style={styles.title}>{data.strMeal}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  )
}

export default MealsCard

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin:10,
    borderColor: '#e0e0e0',
  },
  bgImage:{
    width: '100%',
    minHeight: 200,
    resizeMode: 'cover',
    justifyContent:'flex-end',
  },
  title:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    textAlign:'right',
    width:'100%',
    height: 45,
    paddingRight: 10,
    fontSize: 35,

  
  },
})