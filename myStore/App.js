
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailScreens, ProductScreens } from './src/pages';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName='ProductScreens'>
          <Stack.Screen name="ProductScreens" component={ProductScreens} />
          <Stack.Screen name="DetailScreens" component={DetailScreens} />
        </Stack.Navigator>
      </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({});
