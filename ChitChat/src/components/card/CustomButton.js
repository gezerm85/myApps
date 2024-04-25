import { StyleSheet, Text, View, Pressable, } from 'react-native'
import React from 'react'

const CustomButton = ({btnPressColor, btnColor, setWidth, title, setTextColor, setPressColor, onPress, setBorder, setBorderColor}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [
        {
            backgroundColor: pressed ? btnPressColor : btnColor,
            width: setWidth,
            borderWidth:setBorder,
            borderColor: setBorderColor
        },
        styles.container
    ]}>
      {({pressed}) => (
          <Text style={[styles.title_box, {color: pressed ? setPressColor : setTextColor}]}
          >{title}</Text>
        )}
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 10,
        marginVertical:10,
        height: 56,
        

      
    },
    title_box: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})