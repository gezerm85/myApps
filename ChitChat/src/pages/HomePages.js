import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { CustomButton } from '../components/card'

const HomePages = ({navigation}) => {

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageBox} source={require('../../assets/images/logo.png')}/>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
          Chit<Text style={{color:'#FFC805', fontSize: 40, fontWeight:'bold'}}>Chat</Text>’e
          <Text style={styles.subText}>{"\n"}Hoş Geldiniz</Text>
          </Text>
          <Text style={styles.textBox}>
          Maksimum geyik minumum yaşlılık! ChitChat ‘de dilediğin gibi mesajlaş.
          </Text>
        </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          btnColor={'#FFC805'}
          btnPressColor={'#CCA004'}
          setWidth={'100%'}
          onPress={()=> navigation.navigate('Login')}
          title={'Giriş Yap'}
        />
        <CustomButton
          btnColor={null}
          btnPressColor={'#FFC805'}
          setWidth={'100%'}
          onPress={()=> navigation.navigate('SignUp')}
          title={'Kayıt Ol'}
          setBorder={1}
          setBorderColor={'#fff'}
          setTextColor={'#fff'}
        />
      </View>
        <View style={styles.footerContainer}>
          <Text style={styles.bottomText}>By continuing, you agree to the ChitChatApp Terms &<Text>{'\n'}Conditions</Text></Text>
        </View>
    </View>
  )
}

export default HomePages

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  imageContainer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  imageBox:{
    width:180,
    height:180,
    resizeMode: 'contain',
  },
  titleContainer:{
    width:'100%',
    paddingHorizontal: 16,
    
  },
  titleText:{
    fontSize: 40,
    fontWeight:'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  textBox:{
    color: '#FFF',
    fontSize: 15,
  },
  buttonContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    
  },
  footerContainer:{
    width: '100%',
    paddingHorizontal: 16,
  },
  bottomText:{
    color: '#FFF',
    fontSize: 12,
    textAlign: 'left',
    width: '100%',
  },
})