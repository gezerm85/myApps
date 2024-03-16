import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import StackNavigator from './StackNavigator';
import { FavoriteJob } from '../pages';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
  return (
        <Drawer.Navigator initialRouteName="JobsPages">
            <Drawer.Screen  name="JobsPages" component={StackNavigator}
            options={{
                drawerActiveBackgroundColor: '#c43131',
                drawerActiveTintColor: '#fff',
                 }}/>
            <Drawer.Screen name="FavoriteJob" component={FavoriteJob}
            options={{
                drawerActiveBackgroundColor: '#c43131',
                drawerActiveTintColor: '#fff', 
            }}/>
        </Drawer.Navigator>
  )
}

export default DrawerNavigation

