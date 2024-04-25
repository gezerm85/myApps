import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const MessagesCard = ({message}) => {
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.innerContainer}>
                <Text style={styles.content_user}>{message.userName}</Text>
                <Text style={styles.content_date}>{message.date}</Text>
            </View>
                <View style={styles.messageContainer}>
                <Text style={styles.content_message}>{message.Message}</Text>
            </View>
        </ScrollView>
    </View>
  )
}

export default MessagesCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFC805',
        marginHorizontal: 16,
        borderRadius: 15,
        marginVertical: 10,
    },
    innerContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: 10,
    },
    messageContainer:{
        padding: 10,
    },      
    content_user:{
        color: '#1c1c1c',
        fontWeight: 'bold',
    },
    content_date:{
        color: '#1c1c1c',
    },
    content_message:{
        color: '#1c1c1c',
        fontWeight: 'bold',
    },
})