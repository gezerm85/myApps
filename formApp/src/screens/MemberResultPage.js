import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MemberResultPage = ({route}) => {
    const {user} = route.params

  return (
    <View style={styles.container}>
      <Text>Adı: {user.userName}</Text>
      <Text>Soyadı: {user.userSurname}</Text>
      <Text>E-Posta: {user.userMail}</Text>
    </View>
  )
}

export default MemberResultPage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})