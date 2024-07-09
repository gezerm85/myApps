import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { db } from "../../../firebaseConfig";
import { getAuth } from "firebase/auth";
import MessagesCard from "../../components/cards/MessagesCard/MessagesCard";
import { Ionicons } from "@expo/vector-icons";
import styles from "./MessagesPages.style";

const MessagesPages = ({ route }) => {
  const { item } = route.params;

  const [messageContent, setMessageContent] = useState([]);
  const [text, setText] = useState("");

  function writeUserData() {
    if (!text.trim()) {
      alert("Please enter a room name");
      return;
    }

    const userMail = getAuth().currentUser.email;

    const db = getDatabase();
    const massageRef = ref(db, "messages/" + item.roomName);
    const newMassageRef = push(massageRef);
    set(newMassageRef, {
      roomsName: item.roomName,
      Message: text,
      userName: userMail.split("@")[0],
      date: new Date().toISOString(),
    })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getMessages();
  }, []);

  function getMessages() {
    const db = getDatabase();
    const starCountRef = ref(db, "messages/" + item.roomName);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const massageData = Object.values(data);
        setMessageContent(massageData);
        setText("");
      } else {
        setMessageContent([]);
      }
    });
  }

  const renderContent = ({ item }) => {
    return <MessagesCard message={item} />;
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MessagesPages;
