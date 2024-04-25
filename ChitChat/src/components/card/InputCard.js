import { StyleSheet, Text, View, TextInput,  } from 'react-native'
import React from 'react'

const InputCard = ({placeholderText, title, secureText, handleChangeText, handleValue, handleBlur}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title_box}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={'#fff'}
        placeholder={placeholderText}
        secureTextEntry={secureText}
        onChangeText={handleChangeText}
        value={handleValue}
        textAlign='left'
        onBlur={handleBlur}
        autoCapitalize='none'
        
      />
    </View>
  )
}

export default InputCard

const styles = StyleSheet.create({
  inputContainer:{
    width: '100%',
    marginVertical:10,
  },
  input:{
    color: 'white',
    height: 56,
    borderColor: '#000',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  title_box:{
    fontWeight: 'bold',
    color: '#fff',
    
  },
})