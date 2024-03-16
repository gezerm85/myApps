import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({title, isSecuraText, handleOnchangeText, handValue, handlePlaceholder, handleKeyboardType} ) => {
  return (
    
<View style={styles.inputContainer}>

        <Text style={styles.inputText}>{title} </Text>
        <TextInput
        secureTextEntry={isSecuraText} 
        placeholder={handlePlaceholder}
        style={styles.inputStyle}
        onChangeText={handleOnchangeText}
        value={handValue}
        keyboardType={handleKeyboardType}
        />

</View>


  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer: {
        width: '80%',
        
    
      },

      inputText: {
        color: 'white',
        fontWeight: 'bold',
        
      },

      inputStyle: {
        width: '100%',
        height: 40,
        borderBottomWidth: 0.5,
        borderColor: '#fff',
        marginVertical:10,
        textAlign: 'center',
      },
})