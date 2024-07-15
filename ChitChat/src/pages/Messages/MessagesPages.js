import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView
} from "react-native";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue, update } from "firebase/database";
import { db } from "../../../firebaseConfig";
import { getAuth } from "firebase/auth";
import MessagesCard from "../../components/cards/MessagesCard/MessagesCard";
import { Ionicons } from "@expo/vector-icons";
import styles from "./MessagesPages.style";

const MessagesPages = ({ route }) => {
  const { item } = route.params;

  const auth = getAuth().currentUser;
  const userImage = auth.photoURL

  const [messageContent, setMessageContent] = useState([]);
  const [text, setText] = useState("");
  const [keys, setKeys] = useState();


  useEffect(() => {
    getMessages();
  }, []);

  function getMessages() {
    const db = getDatabase();
    const starCountRef = ref(db, `Rooms/${item.id}/Messages`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const massageData = Object.values(data);
        const messageKeys = Object.keys(data)
        setKeys(messageKeys)

        setMessageContent(massageData);
        setText("");
      } else {
        setMessageContent([]);
      }
    });
  }

  function writeUserData() {
    if (!text.trim()) {
      alert("Oda İsmi Giriniz");
      return;
    }
    const userName = auth.displayName
    const userImage = auth.photoURL

    const massageRef = ref(db, `Rooms/${item.id}/Messages`);
    const newMassageRef = push(massageRef);
    set(newMassageRef, {
      roomsName: item.roomName,
      Message: text,
      userName: userName,
      userImage: userImage,
      date: new Date().toISOString(),
    })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }



  const updateUser= async () => {
    try {
      if (keys.length > 0) {
        const userKey = keys[0]; 
        await update(ref(db, `Rooms/${item.id}/Messages/${userKey}`), {
          userImage: userImage, 
        });
      } else {
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    updateUser()
  }, [userImage]);
  


  const renderContent = ({ item }) => {
    return <MessagesCard message={item} />;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.flatListContainer}
          data={messageContent}
          renderItem={renderContent}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.messageInputContainer}>
          <TextInput
            style={styles.messageInput}
            placeholder="Mesaj"
            placeholderTextColor={"#fff"}
            onChangeText={setText}
            value={text}
          />
          <TouchableOpacity onPress={writeUserData} style={styles.messageBtn}>
            <Ionicons name="send-sharp" size={24} color="#000000" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default MessagesPages;
