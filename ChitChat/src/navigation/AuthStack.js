import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LoginPages, SignUpPages, HomePages } from '../pages';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false,
    headerStyle: { backgroundColor: '#CCA004' },}}
    initialRouteName='Home'>
        <Stack.Screen options={{headerTitle: 'Welcome', headerTintColor:'#1c1c1c', headerTitleAlign:'center'}} 
        name="Home" component={HomePages} />
        <Stack.Screen options={{ headerTintColor:'#1c1c1c', headerTitleAlign:'center'}}
         name="Login" component={LoginPages} />
        <Stack.Screen options={{ headerTintColor:'#1c1c1c', headerTitleAlign:'center'}}
         name="SignUp" component={SignUpPages} />
    </Stack.Navigator>
    
  )
}

export default AuthStack

