import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const ErrorAnimation = () => {
  return (
    
      <LottieView style={styles.container} source={require('../../assets/Error.json')} autoPlay  />
    
  )
}

export default ErrorAnimation

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
})