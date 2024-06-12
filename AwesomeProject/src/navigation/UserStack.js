import React from 'react'
import {HomePage, ProfilePage} from '../screens'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { logout } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const UserStack = () => {

  const dispatch = useDispatch()
  return (

    <Stack.Navigator
        initialRouteName='Home'>

        <Stack.Screen options={{
          headerRight:()=> <MaterialIcons onPress={()=>dispatch(logout())} name="logout" size={24} color="black" />
        }} name='Home' component={HomePage}/>
        <Stack.Screen name='Profile' component={ProfilePage}/>

    </Stack.Navigator>



  )
}

export default UserStack
