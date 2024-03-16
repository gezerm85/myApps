import { StyleSheet, Text, View, Image, Pressable, } from 'react-native'
import React from 'react'

const CategoryCard = ({categories, onSelect}) => {
  return (
    <Pressable onPress={onSelect} >
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: categories.strCategoryThumb}} />
        <Text style={styles.title}>{categories.strCategory}</Text>
      </View>
    </Pressable>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    borderColor:'#e0e0e0',
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
    margin:9,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding:1,

  },
  image:{
    resizeMode: 'cover',
    width: 100,
    minHeight: 100,
    borderRadius:50,
  },
  title:{
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 20,
  },
})