import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserCard = (props) => {
  return (
    <View styles={styles.container}>
            <Text style={styles.userText}>{props.username}</Text>
        <View styles={styles.innerContainer}>
            <Text styles={styles.nameText}>{props.name}</Text>
            <Text styles={styles.emailText}>{props.email}</Text>
        </View>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
    container:{
        marginVertical: 5,
        padding: 10,
        
    },
    innerContainer:{
        flexDirection: 'row',
    },
    userText:{
        color: 'red'
    },
    nameText:{
        color: 'red'
    },
    emailText:{
        color: 'red'
    },
})