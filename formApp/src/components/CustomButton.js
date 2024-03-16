import { StyleSheet, Text, View, Button, } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress, }) => {
  return (
    <View>
      <Button
        title= {title}
        onPress={onPress}
      />
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})