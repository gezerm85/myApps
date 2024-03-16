import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { First, Second } from './src/components';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './src/redux/Store';





export default function App() {
  return (
    <Provider store={store} >
      <SafeAreaView style={styles.container}>
        <First/>
        <Second/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
