import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RoomsPages, ProfilePages, MessagesPages } from '../pages';
import { FontAwesome } from '@expo/vector-icons';
import { CustomButton } from '../components/card';
import { getAuth, onAuthStateChanged, signOut, } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';




const Stack = createNativeStackNavigator();

const UserStack = () => {


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {

    });

    return unsubscribe;
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      await AsyncStorage.removeItem('userToken');
    }catch (error) {
      console.log("hata hata hata : ",error.message);
    }
  };

  return (
    <Stack.Navigator>
        <Stack.Screen 
          options={{ headerTitleAlign:'center',
          headerTintColor:'#1c1c1c',
          headerStyle: { backgroundColor: '#CCA004' },
          headerTitle:{},
          headerRight: ()=> <TouchableOpacity onPress={handleSignOut} ><FontAwesome name="sign-out" size={25} color="black" /></TouchableOpacity> }} 
          name="Rooms" component={RoomsPages}/>
        <Stack.Screen 
          options={{ headerTitleAlign:'center',
          headerTintColor:'#1c1c1c',
          headerStyle: { backgroundColor: '#CCA004' }, }} 
          name="Profile" component={ProfilePages}/>
        <Stack.Screen 
          options={({ route }) => ({ title: route.params.item.roomName, headerTitleAlign:'center', headerStyle:{backgroundColor: '#CCA004'} })}
          name="Messages" component={MessagesPages}/>

    </Stack.Navigator>
  )
}

export default UserStack

const styles = StyleSheet.create({})