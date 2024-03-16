import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';

export default function App() {
  const [listName, setListName] = useState([])

  async function feachData(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    setListName(response.data)
  }
  
  const renderList = ({item}) =>(
    <UserCard name={item.name} username={item.username} email={item.email} />
  )
    
  
    
  

  return (
    <View style={styles.container}>

      <View>

          <FlatList
            data={listName}
            renderItem={renderList}
          />
          <Button title='add' onPress={feachData} />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
});
