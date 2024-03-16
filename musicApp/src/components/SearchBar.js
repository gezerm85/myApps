import { StyleSheet, Text, View, TextInput, } from 'react-native'
import React from 'react'

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.searchBar}
      placeholder='Ara...'
      color={'#fff'}
      placeholderTextColor={'#fff'}
      onChangeText={props.onSearch}
      />
    </View>

    
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor:'gray',
        borderRadius: 10,
    },
    searchBar:{
        paddingLeft: 10,
    },

})