import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../redux/CounterSlice';


const Second = () => {
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
      <Text style={styles.title}>Second: {count} </Text>
      <Button title='Update +' onPress={handleIncrement} />
      <Button title='Update -' onPress={handleDecrement} />
    </View>
  )
}

export default Second

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 15,
      },
      title:{
        color:'white',
        fontSize: 25,
      },
})