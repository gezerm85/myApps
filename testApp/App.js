import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';



export default function App() {
  const [counter,setCounter] = useState(0);
  const [string,setString] = useState("");
  const [result,setResult] = useState("")

  const handleAddButtonPress = () => {
    setResult(string);
    setString(""); // TextInput'u temizle
  };



  return (

   
   


    <View style={styles.container}>

      <View style={styles.btnContainer}>
          <Text>{counter}</Text>

          <Button
            onPress={()=> setCounter(counter +1)}
            title="Arttır"
            color="#3a2deb"
            
          />
          <Button
            onPress={()=> setCounter(counter -1)}
            title="Arttır"
            color="red"
            
          />
      </View>

      <Text>Merhaba:{result}</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.inputStyle}
        placeholder='Kelime gir'
        onChangeText={setString}
        value={string}
        />
      </View>

      <Button
            onPress={handleAddButtonPress }
            title="Ekle"
            color="#3a2deb"
            
      />



      
    </View>
    




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:20,

  },
  btnContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:20,
  },
  inputContainer:{
  
    marginVertical:20,
    backgroundColor:'gray',
    width:'80%',
    height:50,

    borderRadius:50,
  },
  inputStyle:{
    flex:1,
    backgroundColor:'blue',
    borderRadius:50,
    textAlign: 'center',

  },
});
