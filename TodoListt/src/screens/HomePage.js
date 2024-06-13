import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback, TextInput, Keyboard, Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc  } from "firebase/firestore"
import {db} from '../../firebaseConfig'
import Animated, {BounceInRight, BounceOutLeft} from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const HomePage = () => {
  
  const [data, setData] = useState([])
  const [isSaved, setIsSaved] = useState(false)
  const [text, setText] = useState('')
  const [editedText, setEditedText] = useState({})
  const [editModes, setEditModes] = useState({});



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

  const updateData = async (item) => {
    try {
      const docRef = doc(db, "TodoList", item.id);
      await updateDoc(docRef, {
        todo: editedText[item.id]
      });
      
 } catch (e) {
      console.log("error: ", e);
    }
  }

  const handleSendData = () =>{
    sendData()
    setText('')
    Keyboard.dismiss()
  }



  const toggleEditMode = (id) => {
    setEditModes(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleUpdateItem = (item) => {
    updateData(item);
    toggleEditMode(item.id);
  };



  const renderItem = ({item, index})=>{
    const isEditing = editModes[item.id];
    return(
      <Animated.View
      entering={BounceInRight.delay(100 * index + 1)}
      exiting={BounceOutLeft.delay(200 * index + 1)}
      style={styles.todoContainer}
      >
      {
        isEditing
          ? <AntDesign onPress={() => handleUpdateItem(item)} name="checkcircle" size={24} color="black" />
          : <FontAwesome onPress={() => toggleEditMode(item.id)} name="edit" size={24} color="black" />
      }
        {
          isEditing
            ? <TextInput
              placeholder='Edit item'
              value={editedText[item.id]}
              onChangeText={(text) => setEditedText(prevState => ({
                ...prevState,
                [item.id]: text
              }))}
              style={styles.inputEditData}
            />
            : <Text style={styles.dataText}>{item.todo}</Text>
        }
        <MaterialCommunityIcons 
        onPress={()=>[deleteData(item.id), setIsSaved(isSaved === false ? true : false)]}
        name="delete" size={24} color="black" />
      </Animated.View>
    )
  }
  

  return (
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss}>
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
      </TouchableWithoutFeedback> 
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
      borderBottomWidth: 1,
      marginBottom: 20,
      padding: 15,
      gap: 5,
    },

    innerContainer:{
        flex: 1,
        backgroundColor: '#ebe7e7',
        paddingHorizontal: 10,
        paddingTop: 20,
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
    inputEditData:{
      flex: 1,
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