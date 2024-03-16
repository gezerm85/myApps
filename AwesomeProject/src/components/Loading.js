import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Loading = ({changeIsLoding,}) => {
  return (
    <View style={styles.container}>

        <Pressable
        onPress={()=> changeIsLoding()}
        style={[{}, styles.closeButtonContainer]}>
        <Text style={styles.closeButton}>X</Text>
        </Pressable>

        <ActivityIndicator size={'large'} color={'white'} />
      <Text style= {styles.LoadingText}> Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'absolute',
        backgroundColor:'tomato',
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    LoadingText: {
        fontSize: 16,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
        
    },
    closeButtonContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
        position: 'absolute',
        top: 30,
        right: 10,
        backgroundColor:'black',
    },
    closeButton: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
})