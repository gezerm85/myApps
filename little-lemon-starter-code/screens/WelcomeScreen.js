import * as React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';
import littleLemon from '../assets/little-lemon-logo.png'
import CustomButton from '../components/CustomButton/CustomButton';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={littleLemon} />
      <Text style={styles.desc}>Little Lemon, your local mediterranean Bistro</Text>
      <CustomButton
       title={'Newsletter'}
       btnPress={()=> navigation.navigate('Subscribe')}
       btnColor={'#104d39'}
       btnPressColor={'#196048'}
       />
    </View>
  )
};

export default WelcomeScreen;

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: width * 0.5,
    height: height * 0.5,
    resizeMode: 'contain',
  },

  desc:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    width: width * 0.8,
  }
})
