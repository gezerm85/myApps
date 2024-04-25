import { StyleSheet, Text, View, FlatList } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { MessageInputModal } from '../components/modal';
import FloatingButton from '../components/floatingButton/FloatingButton';
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { db } from '../../firebaseConfig';
import { getAuth } from 'firebase/auth';
import { MessagesCard } from '../components/card';



const MessagesPages = ({route}) => {
  const { item } = route.params;

  const database = getDatabase();

  const [visible, setVisible] = useState(false)
  const [messageContent, setMessageContent] = useState([])

  function writeUserData(text) {
   
     const userMail = getAuth().currentUser.email
    
     const db = getDatabase();
     const massageRef = ref(db, 'messages/' + item.roomName)
     const newMassageRef = push(massageRef);
     set(newMassageRef, {
       roomsName: item.roomName,
       Message: text,
       userName:userMail.split('@')[0],
       date: (new Date()).toISOString(),
      
     }).then(() =>{
       
     })
     .catch((err)=>{
       
     }) 
  };

  useEffect(()=>{
    getMessages()
  },[])

  function getMessages(){
    const db = getDatabase();
    const starCountRef = ref(db, 'messages/'+ item.roomName )
    onValue(starCountRef, (snapshot)=>{
      const data = snapshot.val();
      if (data){
        const massageData = Object.values(data);
        setMessageContent(massageData)
      }else{
        setMessageContent([])
      }
    })
  }



  const renderContent =({item}) =>{
    return <MessagesCard message={item} />
  }

   if(messageContent.length === 0){
     <Text style={styles.title}>{item.roomName} Odası Kuruldu </Text> 
   }


  return (
  
    <View style={styles.container}>
      {
        messageContent.length === 0 
         ? <Text style={styles.title}>{item.roomName} Odası Kuruldu </Text> 
         :<FlatList
         data={messageContent}
         renderItem={renderContent}
         keyExtractor={(item, index) => index.toString()}
         
       />
      }



      <View style={styles.floatingContainer}>
            <FloatingButton
                onPress={() => setVisible(true)}
              />
          </View>
      <MessageInputModal  
        visible ={visible}
        onClose={() => setVisible(false)}
        onSend={writeUserData} 
      />
    </View>
    
  )
}

export default MessagesPages

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1c1c1c',

  },
  title:{
    color: 'white',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#FFC805',
    borderStyle: 'dashed',
    padding: 20,
    margin: 20,

  },
  floatingContainer:{
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
})