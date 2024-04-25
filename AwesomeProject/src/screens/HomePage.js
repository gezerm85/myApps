import { StyleSheet, Text, View, FlatList, TouchableOpacity, Pressable, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc  } from "firebase/firestore"
import {db} from '../../firebaseConfig'
import CustomButton from '../components/CustomButton'


const HomePage = () => {
  
  const [data, setData] = useState([])
  const [isSaved, setIsSaved] = useState(false)
  const [updateTheData, setUpdateTheData] = useState('')


  console.log(data)


  useEffect(() => {
    getData()
  }, [isSaved])
  

 // SEND DATA FROM FIRESBASE
  const sendData = async() =>{
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        age: 25
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
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
       // console.log(`${doc.id} => ${doc.data()}`);
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


  

  return (
    <View style={styles.container}>
        <TextInput style={styles.inputData}
          placeholder='Enter Your Data'
          placeholderTextColor={'#fff'}
          onChangeText={setUpdateTheData}
          value={updateTheData}
        
        />
      {
        data.map((value, index)=>{
          return(

            <Pressable
            onPress={()=>  [deleteData(value.id), setIsSaved(!isSaved)] }
            key={index}
            >
                <Text style={styles.dataIndex}>{index}</Text>
                <Text style={styles.dataText}>{value.first}</Text>
                <Text style={styles.dataText}>{value.last}</Text>
                <Text style={styles.dataText}>{value.age}</Text>
            </Pressable>
          )
        })
      }

      <CustomButton 
        setWidth={'40%'}
        buttonText={'Save'}
        buttonColor={'blue'}
        pressButtonColor={'gray'}
        handleOnPess={() => { sendData(), setIsSaved(!isSaved) }}
      />
      <CustomButton 
        setWidth={'40%'}
        buttonText={'Get Data'}
        buttonColor={'blue'}
        pressButtonColor={'gray'}
        handleOnPess={getData}
      />
      <CustomButton 
        setWidth={'40%'}
        buttonText={'Delete Data'}
        buttonColor={'blue'}
        pressButtonColor={'gray'}
        handleOnPess={deleteData}
      />
      <CustomButton 
        setWidth={'40%'}
        buttonText={'Update Data'}
        buttonColor={'blue'}
        pressButtonColor={'gray'}
        handleOnPess={()=>  [updateData(data[0]?.id), setIsSaved(!isSaved)]}
      />

    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato',
    },
    dataText:{
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
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
      width: '50%',
      borderRadius: 10,
    }
   
})