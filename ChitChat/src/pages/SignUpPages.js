import { StyleSheet, ScrollView, Text, View, Image, SafeAreaView, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CustomButton, InputCard } from '../components/card'
import { Formik } from 'formik'
import { getAuth, createUserWithEmailAndPassword, } from 'firebase/auth'
import { showMessage } from "react-native-flash-message";

 
const SignUpPages = ({navigation}) => {
  

  const handleSignUp = async (values, { resetForm }) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      resetForm();
      showMessage({
        message: "SignUp",
        description: "Kayıt Oldun :)",
        type: "success",
      });
    } catch (error) {
      showMessage({
        message: "SignUp",
        description: "Bir şeyler ters gitti :(",
        type: "danger",
      });
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.ImageContainer}>
      <Image style={styles.imageBox} source={require('../../assets/images/logo.png')}/>
      </View>

      <Formik 
      initialValues={{name: '', email: '', password: '',}}
      onSubmit={handleSignUp}
    >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={styles.formikContainer}>
          
          <View style={styles.InputContainer}>
            <InputCard
              placeholderText={'Enter Your Name'}
              title={'name'}
              handleChangeText={handleChange('name')}
              handleValue={values.name}
              secureText={false}
              handleBlur={handleBlur('name')}
              />
            <InputCard
              placeholderText={'Enter Your Email'}
              title={'Email'}
              handleChangeText={handleChange('email')}
              handleValue={values.email}
              secureText={false}
              handleBlur={handleBlur('email')}
              />
            <InputCard
              placeholderText={'Create Password'}
              title={'Password'}
              handleChangeText={handleChange('password')}
              handleValue={values.password}
              handleBlur={handleBlur('password')}
              secureText={true}
              />
              
          </View>
          
          <View style={styles.ButtonContainer}>
              <CustomButton
                btnColor={'#FFC805'}
                btnPressColor={'#CCA004'}
                title={'SignUp'}
                setWidth={'100%'}
                setColor={'#000'}
                onPress={handleSubmit}
                  />
                <CustomButton
                  title={'Login'}
                  btnPressColor={'#FFC805'}
                  setWidth={'100%'}
                  setColor={'#fff'}
                  setPressColor={'#FFF'}
                  setBorder={1}
                  setBorderColor={'#FFF'}
                  onPress={()=> navigation.navigate('Login')}
                  setTextColor={'#fff'}
                  />
          </View>
      </View>
     )}
    </Formik>

    </SafeAreaView>
  )
} 

export default SignUpPages

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  ImageContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems:'center',
  },
  formikContainer:{
    flex: 4,
    width: '100%',
    height: '100%',
  },
  InputContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 16,
    marginVertical: 100,
    
  },
  ButtonContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems:'center',
    paddingHorizontal: 16,
    marginBottom: 65,
  },
  imageBox:{
    width:180,
    height:180,
    resizeMode: 'contain',
  },
})
