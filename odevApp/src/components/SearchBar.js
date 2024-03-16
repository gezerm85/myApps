import { StyleSheet, Text, View, TextInput, Image, } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = (props) => {
  return (
<View style={styles.searchContainer}>
    <EvilIcons style={styles.icon} name="search" size={24} color="black" />

    <TextInput style={styles.search}
      placeholder='Ara'
      onChangeText={props.onSearch}

    />
  
</View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchContainer: {
        borderWidth: 1,
        
        margin: 10,
        borderRadius: 10,
        height: 30,
        flexDirection:'row',
        alignItems: 'center',
        
      },
      search: {
       flex: 1,
      },
      icon: {
        bottom:2,
      },
})