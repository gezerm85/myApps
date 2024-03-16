import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
   Text,
   View,
   TextInput,
   Pressable,
   Image,
   SafeAreaView,
   } from 'react-native';

   import React, { useState } from 'react';
   import {CustomButton, CustomTextInput, Loading,  } from '../components';
   import { login } from '../redux/userSlice';

   import { useSelector, useDispatch } from 'react-redux';
   import { setIsLoading, } from '../redux/userSlice';
   

  const LoginPage = ({navigation}) => {
 
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

  // userSlice İçerisindeki verilerin okunması
  const { isloading, } = useSelector((state)=>state.user)

  // useSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titleText}>WELCOME</Text>

    <Image
        style={styles.loginLogo}
        source={require('../../assets/images/login.png')}
      />

      
      <CustomTextInput
        title={'E-mail'}
        isSecuraText={false}
        handleOnchangeText={(text)=> setEmail(text)}
        handValue={email}
        handlePlaceholder='Enter Your E-mail'
        
      />


      <CustomTextInput
        title={'Password'}
        isSecuraText={true}
        handleOnchangeText={(password)=> setPassword(password)}
        handValue={password}
        handlePlaceholder='Enter Your Password'
        
         
      />
      
      <CustomButton
        buttonText={'Login'}
        setWidth="80%"
        handleOnPess={()=> dispatch(login({email, password}))}
        buttonColor="blue"
        pressButtonColor="gray"
      />

      <CustomButton
        buttonText={'Sign UP'}
        setWidth="30%"
        handleOnPess={()=> navigation.navigate('Signup')}
        buttonColor="gray"
        pressButtonColor="lightgray"
      />

      {isloading
        ? <Loading
          changeIsLoding={()=> dispatch(setIsLoading(false))}/>
        : null}

      
    </SafeAreaView>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 50,
    justifyContent: 'center',
   
  },

  loginLogo: {
    width:150,
    height:150,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
