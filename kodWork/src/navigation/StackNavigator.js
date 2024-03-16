import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Jobs, JobsDetail, } from '../pages'

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
    <Stack.Screen name="Jobs" component={Jobs}
    options={{
        headerTitleStyle: {fontWeight: 'bold', fontSize: 18},
        headerShown: false,
    }} />
    <Stack.Screen name="JobsDetail" component={JobsDetail}
    options={{
        headerTitleStyle: {fontWeight: 'bold', fontSize: 18},
        headerShown: false,
    }} />
</Stack.Navigator>
  )
}

export default StackNavigator

