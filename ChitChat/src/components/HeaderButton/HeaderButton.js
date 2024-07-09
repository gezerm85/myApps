import { TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { bgColor, bgColor2 } from "../../utils/Colors";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  remove,
} from "firebase/database";
import ContentInputModal from "../modal/ContentInputModal";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

const HeaderButton = () => {
  const [visible, setVisible] = useState(false);

  const nav = useNavigation();

  const handleOnpress = () => {
    setVisible(true);
    nav.navigate("Rooms");
  };

  function writeUserData(text) {
    const userMail = getAuth().currentUser.email;

    const db = getDatabase();
    const roomsRef = ref(db, "Rooms");
    const newRoomRef = push(roomsRef);
    set(newRoomRef, {
      roomName: text,
      date: new Date().toISOString(),
      id: newRoomRef.key,
      userName: userMail.split("@")[0],
    })
      .then(() => {
        showMessage({
          message: "Oda Kuruldu",
          description: "İyi Sohbetler",
          type: "success",
        });
      })
      .catch((error) => {
        showMessage({
          message: error.code,
          description: "Bir şeyler ters gitti",
          type: "danger",
        });
      });
  }
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? bgColor : "#fff",
        },
        {
          padding: 5,
          borderRadius: 25,
        },
      ]}
      onPress={handleOnpress}
    >
      <Ionicons name="add-sharp" size={35} color="black" />
      <ContentInputModal
        visible={visible}
        onClose={() => setVisible(!visible)}
        onSend={(text) => writeUserData(text)}
      />
    </Pressable>
  );
};

export default HeaderButton;
