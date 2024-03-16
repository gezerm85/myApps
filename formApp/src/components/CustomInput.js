import { StyleSheet, Text, View, TextInput, } from 'react-native'
import React from 'react'

const CustomInput = ({Label, placeholder,onChangeText}) => {
  return (
    <View style={styles.Container}>
            <Text style={styles.Label}>{Label}</Text>
        <View style={styles.InputContainer}>
            <TextInput
                style={styles.TextInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    Container:{
        margin: 5,
        padding: 3,

    },
    Label: {
       fontSize: 15,
       fontWeight: 'bold', 
    },
    InputContainer:{
        borderWidth: 1,   
    },
    TextInput:{
        width: '100%'
    },
})