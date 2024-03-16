import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, } from '../redux/CounterSlice';

const First = () => {
const count = useSelector((state) => state.counter.value)
const dispatch = useDispatch()


const handleIncrement = () =>{
  dispatch(increment())
  

}
const handleDecrement = () =>{
  dispatch(decrement())
}
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>First: {count} </Text>
      <Button title='Update + ' onPress={handleIncrement} />
      <Button title='Update - ' onPress={handleDecrement} />
    </View>
  )
}

export default First

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        padding: 15,
      },
      title:{
        color:'white',
        fontSize: 25,
      },
})