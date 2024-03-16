import { StyleSheet, Text, View, TextInput, FlatList, Image, Pressable, TouchableOpacity,  } from 'react-native';
import React, {useState} from 'react';


const InputBar = ({inputPlaceholderTitle, inputValue, inputOnChangeText}) => {
  return (
    
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.styleInput}
                placeholder={inputPlaceholderTitle}
                value={inputValue}
                onChangeText={inputOnChangeText}
                />
            </View>

        
    
  )
}

export default InputBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      inputContainer:{
        backgroundColor: '#c4c4c4',
        width: '80%',
        borderRadius:5,
      },
      styleInput:{
        width: '100%',
        padding:5,
      },

})