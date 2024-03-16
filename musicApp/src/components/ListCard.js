import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ListCard = (props) => {
  return (
    <View style={styles.container}>
      <Image
      style={styles.Image}
      source={{uri: props.song.imageUrl}} />
      <View style={styles.innerContainer}>
            <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.contentContainer}>
            <View style={styles.infoContainer}>
                <Text style={styles.artist}>{props.song.artist}</Text>
                <Text style={styles.year}>{props.song.year}</Text>
            </View>  
            
             { props.song.isSoldOut &&  <View style={styles.isSoldOutContainer}>
                    <Text style={styles.isSoldOut}>Tükendi</Text>
                </View> }
        </View>
      </View>
    </View>
  )
}

export default ListCard

const styles = StyleSheet.create({
    container:{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Image:{
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'lightgrey',
    },
    innerContainer:{
        flex: 1,
        marginLeft: 10,
      
       
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        
    },
    infoContainer:{
       flexDirection: 'row',
       flex: 1,
       
       
    },
    contentContainer:{
        flexDirection: 'row',
       
       
        
    },
    artist:{
        fontSize:13,
        fontWeight: 'bold',
    },
    year:{
        marginLeft: 10,
        color:'#7a7a7a',
    },
    isSoldOutContainer:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'red',
        padding: 5,
       
       
    },
    isSoldOut:{
        color: 'red',
        
    },



})