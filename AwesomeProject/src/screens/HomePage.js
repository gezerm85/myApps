import { StyleSheet, Text, View, FlatList, TouchableOpacity, Pressable, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc  } from "firebase/firestore"
import {db} from '../../firebaseConfig'
import Animated, {BounceIn} from 'react-native-reanimated';


const HomePage = () => {
  
  const [data, setData] = useState([])
  const [isSaved, setIsSaved] = useState(false)
  const [text, setText] = useState('')



  useEffect(() => {
    getData()
  }, [isSaved])
  

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
      await deleteDoc(doc(db, "users", value));
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
  }

  const renderItem = ({item, index})=>{
    return(
      <Animated.View
      entering={BounceIn.delay(100 * index + 1)}
      >
      <Text style={styles.dataText}>{item.todo}</Text>
      </Animated.View>
    )
  }
  

  return (
    <View style={styles.container}>

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
              placeholder='Enter Your Data'
              placeholderTextColor={'#fff'}
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
        backgroundColor: 'tomato',
    },
    innerContainer:{
        flex: 1,
        padding: 50,
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
      color: '#fff',
      fontWeight: 'semibold',
      borderWidth: 1,
      padding: 15,
      textAlign: 'center',
      borderRadius: 10,
      marginBottom: 20,

    },
    dataIndex:{
      fontSize: 20,
      color: 'blue',
      fontWeight: 'bold',
    },
    inputData:{
      color: '#fff',
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