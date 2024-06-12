import { StyleSheet, Text, View, FlatList, TouchableOpacity, Pressable, TextInput, Keyboard } from 'react-native'
import React, {useState, useEffect} from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc  } from "firebase/firestore"
import {db} from '../../firebaseConfig'
import Animated, {BounceIn, FadeIn, BounceInRight, BounceOutLeft} from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const HomePage = () => {
  
  const [data, setData] = useState([])
  const [isSaved, setIsSaved] = useState(false)
  const [text, setText] = useState('')



  useEffect(() => {
    getData()
  }, [data])
  

 // SEND DATA FROM FIRESBASE
  const sendData = async() =>{
    try {
      if (!text) {
        return;
      } 
      const docRef = await addDoc(collection(db, "TodoList"), {
        todo: text,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // GET DATA FROM FIRESBASE

  const getData = async() =>{
    const allData = []
    try {
      const querySnapshot = await getDocs(collection(db, "TodoList"));
      querySnapshot.forEach((doc) => {
       allData.push({...doc.data(), id: doc.id})
      });
      
      setData(allData)
    } catch (error) {
        console.log(error)
    }

  }

  // DELETE DATA FROM FIRESBASE

  const deleteData = async(value) =>{
    try {
      await deleteDoc(doc(db, "TodoList", value));
    } catch (e) {
      console.log("error: ", e)
    }
  }

  //    UPDATE DATA FROM FIRESBASE

  const updateData = async(value) =>{
    try {
    const ageData = doc(db, "users", value);

      // Set the "capital" field of the city 'DC'
      await updateDoc(ageData, {
        age: updateTheData
      });
    } catch (e) {
      console.log("error: ", e)
    }
  }

  const handleSendData = () =>{
    sendData()
    setIsSaved(!isSaved)
    setText('')
    Keyboard.dismiss()
  }

  const renderItem = ({item, index})=>{
    return(
      <Animated.View
      entering={BounceInRight.delay(100 * index + 1)}
      exiting={BounceOutLeft}
      style={styles.todoContainer}
      >
        <FontAwesome name="edit" size={24} color="black" />
        <Text style={styles.dataText}> {index} {item.todo}</Text>
        <MaterialCommunityIcons 
        onPress={()=>[deleteData(item.id), setIsSaved(isSaved === false ? true : false)]}
        name="delete" size={24} color="black" />
      </Animated.View>
    )
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.todoTitle}>Todo List</Text>
          <View style={styles.innerContainer}>
            <FlatList
              renderItem={renderItem}
              data={data}
              keyExtractor={(item)=> item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={styles.inputContainer} >
              <TextInput style={styles.inputData}
              placeholder='Yapılacaklar..'
              placeholderTextColor={'#000'}
              onChangeText={setText}
              value={text}
            />
              <TouchableOpacity onPress={handleSendData} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Gönder</Text>
              </TouchableOpacity>
          </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    todoContainer:{
      flex1: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      marginBottom: 20,
      borderRadius: 15,
      padding: 15,
      gap: 5,
    },

    innerContainer:{
        flex: 1,
        backgroundColor: '#ebe7e7',
        paddingHorizontal: 10,
    },
    inputContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
      gap: 10,
      marginHorizontal: 20,
      marginBottom: 20,
    },
    dataText:{
      fontSize: 18,
      color: '#000',
      fontWeight: 'semibold',
      textAlign: 'left',
      flex: 1,
    },
    todoTitle:{
      fontSize: 30,
      textAlign: 'center',
      color: 'tomato',
      fontWeight: 'bold',
      paddingVertical: 20,
    },
    inputData:{
      color: '#000',
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      width: '75%',
      height: 50,
      borderRadius: 10,
    },
    buttonContainer:{
      backgroundColor: '#152a91',
      height: 50,
      borderRadius: 10,
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText:{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff'
    },
})