import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <DrawerNavigation/>
      </NavigationContainer>
    </Provider>
  );
}


