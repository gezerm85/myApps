import { StyleSheet, Text, View, Image,TouchableWithoutFeedback,  } from 'react-native'
import React from 'react'

const ProductCard = ({product, onSelect }) => {
  return (
  <TouchableWithoutFeedback onPress={onSelect}> 
    <View style={styles.container}>
          <Image style={styles.product_image}  source={{uri: product.image}} />
        <View style={styles.body_container}>
            <Text style={styles.product_title}> {product.title} </Text>
            <Text style={styles.product_pirice}> {product.price} $ </Text>
        </View>
    </View>
  </TouchableWithoutFeedback>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#bdbdbd',
      margin: 10,
      backgroundColor: '#e0e0e0',
    },
    product_image:{
      width: 100,
      minHeight: 100,
      resizeMode: 'contain',
      backgroundColor: 'white'
    },
    body_container:{
      flex: 1,
      justifyContent: 'space-between',
      padding: 5,
    },
    product_title:{
      fontWeight: 'bold',
      fontSize: 16,
    },
    product_pirice:{
      color: 'green',
      textAlign: 'right'
    },
})