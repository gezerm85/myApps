import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'

const CustomTextInput = ({onChange, value, error}) => {
  return (
    <View style={
        [
            styles.container,
            {
                borderColor: error == '' ? '#000' : '#ff0000'
            }
        ]
        }>
      <TextInput
        style={styles.input}
        cursorColor={'#000'}
        placeholder='Type your email'
        placeholderTextColor={'#949090'}
        onChangeText={onChange}
        value={value}

        />
    </View>
  )
}

export default CustomTextInput
const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        width: width * 0.9,
        height: height * 0.06,
        position: 'relative',
        borderWidth: 1,
        borderRadius: 8,
    },
    input: {
        flex: 1,
        color: '#000',
        paddingLeft: 16,
    }
})