import { StyleSheet, Text, View, TextInput, Image, Pressable, } from 'react-native'
import React, { useState } from 'react'
import { CustomButton, CustomTextInput,Loading } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupPage = ({navigation}) => {
  
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  


  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.iconContainer}>
        
      <Image
        style={styles.signupIcon}
        source={require('../../assets/images/signup.png')}
      />
        <Text style={styles.titleText}>Sign Up</Text>
      </View>

      <View style={styles.inputContainer}>

            <CustomTextInput
              title={'Name'}
              handlePlaceholder={'Enter Your Name'}
              handleOnchangeText={setName}
              handValue={name}
              isSecuraText={false}
            />
            <CustomTextInput
              title={'Email'}
              handlePlaceholder={'Enter Your Email'}
              handleOnchangeText={setEmail}
              handValue={email}
              isSecuraText={false}
            />
            <CustomTextInput
              title={'Password'}
              handlePlaceholder={'Create Your Password'}
              handleOnchangeText={setPassword}
              handValue={password}
              isSecuraText={true}
            />


      </View>

      <View style={styles.buttonContainer}>

        <CustomButton
          buttonText={'Sign Up'}
          setWidth="80%"
          handleOnPess={()=> console.log(name, " ", email, " ", password,) }
          buttonColor="blue"
          pressButtonColor="gray"
        />

    
        <Pressable onPress={()=>navigation.navigate("Login")}>
          <Text
           style={{fontWeight:'bold',
           marginBottom:10,
          }}
          
          >Already have an account?
                <Text style={{color:'#fff'}}> Login</Text>
          </Text>
        </Pressable>

      </View>
      

    </SafeAreaView>

    
  )
}

export default SignupPage

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'tomato',
      alignItems: 'center',
      justifyContent: 'center',
    },

    iconContainer: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    inputContainer: {
      flex: 2,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical:20,
     
     

    },

    buttonContainer:{
      flex: 2,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      
     
    },

    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: 50,
      justifyContent: 'center',
     
    },
    signupIcon: {
      width: 100,
      height: 100,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },


})