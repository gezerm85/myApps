import { StyleSheet, Text, View, Button, } from 'react-native'
import React from 'react'
import { CustomButton, CustomInput,  } from '../components'
 
const WelcomePage = ({navigation}) => {

    const goToSign = () =>{
        navigation.navigate('Sign')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WelcomePage</Text>
        <CustomButton
            title= 'Üye ol'
            onPress={goToSign}
        />

        

    </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
})