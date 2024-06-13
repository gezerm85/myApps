import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { logout } from '../redux/userSlice';
import { FontAwesome } from '@expo/vector-icons';

const ProfilePage = () => {
    const dispatch = useDispatch()
  
  
  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle" size={50} color="black" />
      <MaterialIcons onPress={()=>dispatch(logout())} name="logout" size={50} color="black" />
    </View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})