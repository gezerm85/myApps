import { Button, FlatList, StyleSheet, Text, View, } from 'react-native'
import React, { useState, useEffect } from 'react'
import FloatingButton from '../components/floatingButton/FloatingButton'
import { ContentInputModal, } from '../components/modal'
import { RoomsCard } from '../components/card'
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { db } from '../../firebaseConfig';
import { showMessage,} from "react-native-flash-message";




const RoomsPages = ({navigation}) => {
    const [visible, setVisible] = useState(false)
    const [rooms, setRooms] = useState([])

    function writeUserData(text) {
      const db = getDatabase();
      const roomsRef = ref(db, 'Rooms');
      const newRoomRef = push(roomsRef);
      set(newRoomRef, {
        roomName: text,
        date: (new Date()).toISOString(),
      }).then(() => {
        showMessage({
          message: "Oda Kuruldu",
          description: "İyi Sohbetler",
          type: "success",
        });
      }).catch((error) => {
        showMessage({
          message: error.code,
          description: "Bir şeyler ters gitti",
          type: "danger",
        });
      });
    }


    useEffect(() =>{
      getRooms()
    }, [])

    function getRooms() {
      const db = getDatabase();
      const starCountRef = ref(db, 'Rooms/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const roomNames = Object.values(data);  
          setRooms(roomNames);  
        } else {
          setRooms([]);
        }
      });
    }

    const handleRoomsDetail = (item) => {
       navigation.navigate('Messages', {item})
  }

  
  const renderRooms = ({ item }) => {
    return <RoomsCard title={item} handleOnPress={() => handleRoomsDetail(item)} />;

  };
  

  return (
    <View style={styles.container}>

          <FlatList
            data={rooms}
            renderItem={renderRooms}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list} 
          />

          <View style={styles.floatingContainer}>
            <FloatingButton
                onPress={() => setVisible(true)}
              />
          </View>
          <ContentInputModal
            visible ={visible}
            onClose={() => setVisible(!visible)}
            onSend={writeUserData}
          />
    </View>
  )
}

export default RoomsPages

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#1c1c1c',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },

    floatingContainer:{
      position: 'absolute',
      right: 20,
      bottom: 20,
    },
    list:{
      width: '100%',
      height: '100%',
    }
})