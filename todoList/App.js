import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Image, Pressable, TouchableOpacity,  } from 'react-native';
import React, {useState} from 'react';
import { InputBar, InputBtnBar,} from './src/components';


export default function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodoList([...todoList, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };
  const removeTodo = (index) => {
    const updateTodoList = [...todoList];
    updateTodoList.splice(index, 1);
    setTodoList(updateTodoList);
  };
  const toggleTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodoList(updatedTodoList);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.iconImage}
        source={require('./assets/images/todoList.png')}
      />

      <View style={styles.addContainer}>
        <InputBar
          inputValue = {newTodo}
          inputOnChangeText = {(text) => setNewTodo(text)}
          inputPlaceholderTitle = "Yeni Todo Ekle"
        />

        <InputBtnBar
          onPress = {addTodo}
          btnText = "Ekle"
        />
      </View>

      


    <Text style={styles.titleText}>Todo Listesi: {todoList.length} </Text>

    <FlatList
          style={styles.FlatListContainer}
          data={todoList}
          extraData={todoList}
          keyExtractor={(item, index) =>
          index.toString()}
          renderItem={({item, index})=> (
            <TouchableOpacity style={styles.todoContainer}
              onPress={() => toggleTodo(index)}
            >  
              <View style={styles.todoItem}>
              <Text style={[styles.todoItemText, item.completed ? { textDecorationLine: 'line-through' } : null,]}>{`${index + 1}: ${item.text}`}</Text>
              </View>

              <View style={styles.removeContainer}>
              <Pressable style={styles.removeButton} onPress={() => removeTodo(index)}>
                    <Image style={styles.removeIcon}
                      source={require('./assets/images/remove.png')}
                    />
                </Pressable>
              </View>
            </TouchableOpacity>
            
          )}
        /> 
  
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  iconImage:{
    marginVertical: 50,
    width: 150,
    height: 150,
  },
  addContainer:{
    flexDirection: 'row'
  },
  titleText:{
    fontWeight:'bold',
    color: '#59cac0',
    marginVertical: 10,
    fontSize: 20,
  },
  FlatListContainer:{
    width: '93%',
    alignSelf:'flex-start',
    marginLeft: 15,
  },
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
