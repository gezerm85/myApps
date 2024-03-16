import { StyleSheet, Text, View,Pressable, } from 'react-native'
import React from 'react'

const CustomButton = ({setWidth, buttonText, handleOnPess, buttonColor, pressButtonColor,}) => {
  return (

    <Pressable 
    onPress={handleOnPess}
      style={({pressed})  => [{
      backgroundColor: pressed ? pressButtonColor : buttonColor,
      width: setWidth,
    },styles.buttonStyle]   }>

      <Text style={styles.buttonText}> {buttonText} </Text>
    </Pressable>


  )
}

export default CustomButton

const styles = StyleSheet.create({

  buttonStyle:{
    height: 40,
    borderColor: 'white',
    borderRadius: 20,
    marginVertical:10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    
  },

})