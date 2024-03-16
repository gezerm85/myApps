import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import music_data from './music-data.json';
import { ListCard, SearchBar } from './src/components';
import React, {useState} from 'react';

export default function App() {
  const [list, setList] = useState (music_data)

  const renderSong = ({item})=> <ListCard song={item} />
  const renderSeparator = () => <View style={styles.Separator} />


  const handleSearches = text =>{
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;  
    });
    setList(filteredList);
  };



  return (
    <SafeAreaView style={styles.container}>

        <SearchBar onSearch={handleSearches} />

      <View style={styles.listContainer}>

        <FlatList
        keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
        />

      </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer:{
    flex: 1,
  },
  Separator:{
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
});
