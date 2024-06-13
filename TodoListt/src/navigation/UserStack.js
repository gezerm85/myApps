import React from 'react'
import {HomePage, ProfilePage} from '../screens'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const UserStack = () => {

  const navigation = useNavigation()
  return (

    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'tomato'
          },
          headerTitleStyle:{
            color: '#fff',
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}
        >

        <Stack.Screen options={{
          
          headerRight:()=> <FontAwesome onPress={()=> navigation.navigate('Profile')} name="user" size={25} color="#fff" />
        }} name='Home' component={HomePage}/>
        <Stack.Screen
          options={{
            headerTintColor: '#fff'
          }}
        name='Profile' component={ProfilePage}/>

    </Stack.Navigator>



  )
}

export default UserStack
