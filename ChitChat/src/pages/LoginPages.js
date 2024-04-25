import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { CustomButton, InputCard } from '../components/card';
import { Formik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";

const LoginPages = ({ navigation }) => {

  useEffect(() => {
    checkAutoLogin();
  }, []);

  const checkAutoLogin = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      const { email, password } = JSON.parse(userToken);
      signIn(email, password);
    }
  };

  const handleLogin = async (values, { resetForm }) => {
    const { email, password } = values;
    signIn(email, password, resetForm);
  };

  const signIn = async (email, password, resetForm) => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      await AsyncStorage.setItem('userToken', JSON.stringify({ email, password }));
      showMessage({
        message: "Login",
        description: "Giriş Başarılı :)",
        type: "success",
      });
      
    } catch (error) {
      showMessage({
        message: "Hatalı Giriş",
        description: "Bir şeyler ters gitti :(",
        type: "danger",
      });
    } finally {
      if (resetForm) {
        resetForm();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image style={styles.imageBox} source={require('../../assets/images/logo.png')} />
      </View>
      <Formik initialValues={{email: '', password: '' }} onSubmit={handleLogin}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.formikContainer}>
            <View style={styles.InputContainer}>
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
                setWidth={'100%'}
                onPress={handleSubmit}
                title={'Login'}
              />
              <CustomButton
                btnPressColor={'#FFC805'}
                setWidth={'100%'}
                onPress={() => navigation.navigate('SignUp')}
                title={'SignUp'}
                setBorder={1}
                setBorderColor={'#fff'}
                setTextColor={'#fff'}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginPages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  ImageContainer: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formikContainer: {
    flex: 3,
    width: '100%',
    height: '100%',
    marginBottom: 50,
  },
  InputContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 70,
  },
  ButtonContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  imageBox: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
});
