import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'


const JobsCard = ({jobs, onSelect}) => {

  
  return (
  <Pressable onPress={onSelect}>
      <View style={styles.container}>
          <Text style={styles.title}> {jobs.name} </Text>
          <Text style={styles.type}> {jobs.type} </Text>
      <View style={styles.body_container}>
          <Text style={styles.locations}> {jobs.locations[0].name} </Text>
        </View>
      <View style={styles.bottom_container}>
          <Text style={styles.levels}> {jobs.levels[0].name} </Text>
        </View>
    </View>
  </Pressable>
  )
}

export default JobsCard

const styles = StyleSheet.create({
  container:{
    padding: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  type:{
    marginVertical: 5,
  },
  body_container:{
    backgroundColor: '#c43131',
    alignSelf: 'baseline',
    borderRadius: 10,
    padding: 2,
   
  },
  locations:{
    color:'white',
    fontWeight: 'bold',
  },
  bottom_container:{
  },
  levels:{
    textAlign:'right',
    color:'#c43131',
  },
})