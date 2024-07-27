import  React, {useState} from 'react';
import { View, Text, Image, TextInput, Pressable, StyleSheet, Dimensions, Alert, Keyboard, Platform} from 'react-native';
import littleLemonGrey from '../assets/little-lemon-logo-grey.png'
import CustomTextInput from '../components/CustomTextInput/CustomTextInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here

  const [email, setEmail] = useState('')
  const [error, setError] = useState('');

  const handleOnPress = ()=>{
    if(validateEmail(email)){
      Alert.alert('Subscribe', 'Thanks for subscribing, stay tuned!')
      setError('');
      setEmail('')
      console.log("Email: ",email);
    }else{
      setError('Please enter email address')
    }
    Keyboard.dismiss()
  }

  const buttonColor = validateEmail(email) ? '#104d39' : '#989393';
  const buttonPressColor = validateEmail(email) ? '#196048' : '#989393';

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={littleLemonGrey}/>
      <Text style={styles.desc}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      <View style={styles.inputContainer}>
      <CustomTextInput onChange={(text)=> setEmail(text)} value={email} error={error} />
        { error
          ? <Text style={styles.error}>{error}</Text>
          : null
          
        }
      </View>
      <CustomButton
        title={'Subscribe'}
        btnPress={handleOnPress}
        btnColor={buttonColor}
        btnPressColor={buttonPressColor}
        />
    </View>
  )
};

export default SubscribeScreen;

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer:{
    marginVertical: 18
  },
  image: {
    width: width * 0.3,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  desc:{
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    width: width * 0.8
  },
  error:{
    color: '#ff0000',
    paddingLeft: 17,
  }
})
