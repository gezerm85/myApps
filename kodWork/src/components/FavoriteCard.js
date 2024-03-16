import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const FavoriteCard = ({data, removeOnPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {data.name} </Text>
      <Text style={styles.type_title}> {data.type} </Text>
      {data && data.locations && data.locations[0] && <Text style={styles.location}>{data.locations[0].name}</Text>}
      {data && data.levels && data.levels[0] && <Text style={styles.levels_title}>{data.levels[0].name}</Text>}
      <Pressable style={styles.btn} onPress={removeOnPress} >
        <Text style={styles.btn_text}>Remove</Text>
      </Pressable>
    </View>
  )
}

export default FavoriteCard

const styles = StyleSheet.create({
  container:{
    
    backgroundColor:'white',
    margin: 10,
    borderRadius:5,
    padding:2,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  type_title:{
    marginVertical: 5,
  },
  location:{
    backgroundColor:'#c43131',
    alignSelf:'baseline',
    borderRadius: 10,
    padding: 2,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 2,
  },
  levels_title:{
    color:'#c43131',
    textAlign: 'right',
    paddingRight: 5,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
  btn:{
    backgroundColor:'#c43131',
    width:'95%',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    
    
  },
  btn_text:{
    color:'white',
    textAlign:'center',
    marginHorizontal:5,
  },
})