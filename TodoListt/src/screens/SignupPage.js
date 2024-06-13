import { StyleSheet, Text, View, TextInput, Image, Pressable, } from 'react-native'
import React, { useState } from 'react'
import { CustomButton, CustomTextInput,Loading } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setEmail, setPassword, setIsLoading } from '../redux/userSlice';
import { signup } from '../redux/userSlice';

const SignupPage = ({navigation}) => {
  
  const [name, setName] = useState ('');



    const dispatch = useDispatch()
    const {email, password, isloading} = useSelector((state)=> state.user)

    



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
              handleOnchangeText={(text)=> dispatch(setEmail(text))}
              handValue={email}
              isSecuraText={false}
            />
            <CustomTextInput
              title={'Password'}
              handlePlaceholder={'Create Your Password'}
              handleOnchangeText={(text)=> dispatch(setPassword(text))}
              handValue={password}
              isSecuraText={true}
            />


      </View>

      <View style={styles.buttonContainer}>

        <CustomButton
          buttonText={'Sign Up'}
          setWidth="80%"
          handleOnPess={()=> dispatch(signup({email, password}))}
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
      {isloading
        ? <Loading
          changeIsLoding={()=> dispatch(setIsLoading(false))}/>
        : null}

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
      justifyContent: 'space-evenly',
      alignItems: 'center',
     

    },

    buttonContainer:{
      flex: 1,
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
      marginVertical: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },


})