import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'

const DetailCard = ({data}) => {    
  return (
    <View style={styles.container}>
        <Image style={styles.detail_image}  source={{uri: data.image}} />
            <View style={styles.body_container}>
                <Text style={styles.detail_title}> {data.title} </Text>
                <Text style={styles.detail_desc}> {data.description} </Text>
                <Text style={styles.detail_pirice}> {data.price} $ </Text>
            </View>
    </View>
  )
}

export default DetailCard

const styles = StyleSheet.create({
    container:{
      
    },
    detail_image: {
        height: '50%',
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    body_container: {
        padding: 5,
    },
    detail_title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginVertical: 10,
    },
    detail_desc: {
        fontSize: 18,
        fontStyle: 'italic',
    },
    detail_pirice: {
        marginVertical: 10,
        textAlign: 'right',
        color: 'green',
        fontSize: 18,
    },
})