import { StyleSheet, Text, View, Image, Dimensions,} from 'react-native'
import React from 'react'

const StoreCard = ({store}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.Image} source={{uri: store.imgURL}} />
        <Text style={styles.title}>{store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
        <Text style={styles.inStock}>{store.inStock ? "STOKTA VAR" : "STOKTA YOK"}</Text>
        
    </View>
  )
}
//?  "" : "STOKTA YOK"

export default StoreCard

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff'
    },
    Image: {
        height: Dimensions.get('window').height / 3,
        resizeMode: 'contain'

    },
    title: {
        color:'#000',
        marginTop:15,
        fontSize: 15,
        fontWeight:"bold",
        alignSelf: 'center'
        
    },
    price: {
        color:'green',
        marginVertical: 15,
        fontWeight:"bold",
        paddingLeft: 10,
    },
    inStock: {
        color: 'red',
        fontWeight:"bold",
        paddingLeft: 10,
        paddingBottom: 10,
        
    },
})