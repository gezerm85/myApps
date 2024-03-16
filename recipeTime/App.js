import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoriesPages, MealsPages, DetailPages } from './src/pages';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign:'center', headerTintColor:'#FC6736'}} initialRouteName="CategoriesPages">
        <Stack.Screen options={{title:'Categories'}} name="CategoriesPages" component={CategoriesPages} />
        <Stack.Screen options={{title:'Meals'}} name="MealsPages" component={MealsPages} />
        <Stack.Screen options={{title:'Detail'}} name="DetailPages" component={DetailPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


