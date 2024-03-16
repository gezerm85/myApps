import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack.js';
import UserStack from './UserStack.js';
import { useSelector } from 'react-redux';
import app from '../../firebaseConfig.js';

const rootNavigation = () => {

    const {isAuth} = useSelector((state)=>state.user)


  return (
   
<NavigationContainer>


    {
        !isAuth 
            ? <AuthStack/>
            : <UserStack/>
    }


</NavigationContainer>


  )
}

export default rootNavigation

