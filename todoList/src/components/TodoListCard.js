import { StyleSheet, Text, View, TextInput, FlatList, Image, Pressable, TouchableOpacity,  } from 'react-native';
import React from 'react'

const TodoListCard = ({item, index, removeTodo, toggleTodo}) => {
  return (
    <TouchableOpacity style={styles.todoContainer}
    onPress={() => toggleTodo(index)}
  >  
    <View style={styles.todoItem}>
    <Text style={[styles.todoItemText, item.completed ? { textDecorationLine: 'line-through' } : null,]}>{`${index + 1}: ${item.text}`}</Text>
    </View>

    <View style={styles.removeContainer}>
    <Pressable style={styles.removeButton} onPress={() => removeTodo(index)}>
          <Image style={styles.removeIcon}
            source={require('../../assets/images/remove.png')}
          />
      </Pressable>
    </View>
  </TouchableOpacity>
  )
}

export default TodoListCard

const styles = StyleSheet.create({
    todoContainer:{
      flexDirection: 'row',
      backgroundColor:'#59cac0',
      width: '100%',
      padding: 5,
      borderRadius: 5,
      marginVertical: 5,
      justifyContent: 'space-between',
    },
    todoItem:{
      borderRadius: 5,
      marginVertical: 5,
      width: '90%',
    },
    todoItemText:{
      color: '#222222',
      justifyContent: 'center',
    },
    removeContainer:{
      marginVertical: 5,
      marginHorizontal: 5,
      alignItems:'center',
      justifyContent: 'center'
    },
    removeIcon:{
      width: 15,
      height: 15,
      alignSelf:'center',
    },
  });