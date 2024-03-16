import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, FlatList} from 'react-native';
import Patikastore_data from './src/PatikaStore_data .json'
import { SearchBar, StoreCard, } from './src/components';
import React, {useState} from 'react';


export default function App() {
  const [list, setList] = useState(Patikastore_data)


  const renderSeparator = () => <View style={styles.Separator} />

  const handleSearches = text => {
    const filteredList = Patikastore_data.filter(store => {
      const searcedText = text.toLowerCase();
      const currentTitle = store.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    })
    setList(filteredList);
  };



  return (
    
      <SafeAreaView style={styles.container}>

        <View>
          <Text style={styles.patikastore_title}>PATİKASTORE</Text>

          <SearchBar onSearch={handleSearches}/>
        </View>

          <FlatList
            data={list}
            renderItem={({item})=> <StoreCard store={item} />}
            ItemSeparatorComponent={renderSeparator}
          />

      </SafeAreaView>



    
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
  
  },

  patikastore_title:{
    fontSize: 35,
    color: "#800080",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  Separator:{
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },


});
