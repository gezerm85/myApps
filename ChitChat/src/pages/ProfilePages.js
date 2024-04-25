import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfilePages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProfilePages</Text>
    </View>
  )
}

export default ProfilePages

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'white',
  },
})