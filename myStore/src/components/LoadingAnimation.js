import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const LoadingAnimation = () => {
  return (
    
      <LottieView style={styles.container} source={require('../../assets/Loading.json')} autoPlay  />
    
  )
}

export default LoadingAnimation

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})