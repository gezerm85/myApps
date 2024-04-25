import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const FloatingButton = ({onPress}) => {
  return (
  
        <TouchableOpacity 
            style={styles.container}
            onPress={onPress}
        >
                <Ionicons name="add-outline" size={40} color="#1C1C1C" />
        </TouchableOpacity>
   
  )
}

export default FloatingButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CCA004',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '1C1C1C',
    }
})