import { StyleSheet, Text, View, TextInput, FlatList, Image, Pressable, TouchableOpacity,  } from 'react-native';
import React, {useState} from 'react';

const InputBtnBar = ({btnText, onPress,}) => {
  return (
    <View style={styles.container}>
            <Pressable style={styles.styleButton} onPress={onPress}>
                <Text style={styles.styleButtonText}> {btnText} </Text>
            </Pressable>
    </View>
  )
}

export default InputBtnBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    styleButton:{
        backgroundColor:'#59cac0',
        padding: 10,
        borderRadius: 10,
        marginLeft: 5,
      },
      styleButtonText:{
        color: '#222222',
        fontWeight:'bold',
      },
})