import { StyleSheet, Text, View, SafeAreaView, Alert, } from 'react-native'
import React, {useState} from 'react'
import { CustomButton, CustomInput,  } from '../components'


const MemberSignPage = ({navigation}) => {

    const [userName, setUserName] = useState (null);
    const [userSurname, setUserSurname] = useState (null);
    const [userMail, setUserMail] = useState (null);

    function handleSubmit (){
        if (!userName || !userSurname || !userMail){
            Alert.alert('Form','Bilgileri Giriniz')
            return;
        }
        const user = {
            userName,
            userSurname,
            userMail,
        };

        navigation.navigate('Result', {user})
  
    };
    
    

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        Label={'Üye Adı'}
        placeholder={'Adınızı Giriniz'}
        onChangeText={setUserName}
      />
      <CustomInput
        Label={'Üye Soyadı'}
        placeholder={'Soyadınızı Giriniz'}
        onChangeText={setUserSurname}
      />
      <CustomInput
        Label={'E-Posta'}
        placeholder={'E-Posta Giriniz'}
        onChangeText={setUserMail}
      />
        <CustomButton
            title= 'Kaydı Tamamla'
            onPress={handleSubmit}
        />
    </SafeAreaView>
  )
}

export default MemberSignPage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',

    },
})