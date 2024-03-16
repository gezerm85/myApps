import { StyleSheet, Text, View,Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const DetailCard = ({data}) => {
  const handlePress = () => {
    Linking.openURL(data.strYoutube);
  };
  return (
  <View style={styles.container}>
    <Image style={styles.image} source={{uri: data.strMealThumb}} />
      <Text style={styles.title}>{data.strMeal}</Text>
      <Text style={styles.area}>{data.strArea}</Text>
      <Text style={styles.desc}>{data.strInstructions}</Text>
    <View style={styles.btn_container}>
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default DetailCard

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9, 
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal:10,
    color:'#7c0000',
  },
  area: {
    fontSize: 18,
    paddingHorizontal:10,
    color:'#7c0000',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    padding:10,
    borderTopWidth: 1,
    borderColor:'#aeaeae',
    marginTop: 10,
  },
  btn_container:{
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  btn:{
    backgroundColor:'#ff0808',
    marginVertical: 10,
    width: '90%',
    height: 40,
    alignItems:'center',
    borderRadius: 10,
    paddingVertical: 9,

  },
  btnText:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
})