import { FlatList, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import ContentInputModal from "../../components/modal/ContentInputModal";
import RoomsCard from "../../components/cards/RoomsCard/RoomsCard";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  remove,
} from "firebase/database";
import { db } from "../../../firebaseConfig";
import { showMessage } from "react-native-flash-message";
import styles from "./RoomsPages.style";
import Animated, {
  BounceInRight,
  BounceIn,
  BounceOutLeft,
  FlipOutYLeft,
  Easing,
  BounceOut,
} from "react-native-reanimated";

const RoomsPages = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [rooms, setRooms] = useState(null);

  function writeUserData(text) {
    const db = getDatabase();
    const roomsRef = ref(db, "Rooms");
    const newRoomRef = push(roomsRef);
    set(newRoomRef, {
      roomName: text,
      date: new Date().toISOString(),
      id: newRoomRef.key,
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

  useEffect(() => {
    getRooms();
  }, []);

  function getRooms() {
    const db = getDatabase();
    const starCountRef = ref(db, "Rooms/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const roomNames = Object.values(data);
        setRooms(roomNames);
      } else {
        setRooms(null);
      }
    });
  }

  const handleRemove = (id) => {
    const roomRef = ref(db, `Rooms/${id}`);

    remove(roomRef)
      .then(() => {
        console.log("Veri başarıyla silindi.");
      })
      .catch((error) => {
        console.error("Veri silinirken bir hata oluştu:", error);
      });
  };

  const handleRoomsDetail = (item) => {
    navigation.navigate("Messages", { item });
  };

  const handleOnLongPress = (index) => {
    Alert.alert(
      `${rooms[index].roomName}`,
      "Odayı silmek istediğinize emin misiniz?",
      [
        {
          text: "sil",
          onPress: () => handleRemove(rooms[index].id),
        },
        {
          text: "İptal",
          style: "cancel",
        },
      ]
    );
  };

  const renderRooms = ({ item, index }) => {
    return (
      <Animated.View
        entering={BounceInRight.delay(100 * index)}
        exiting={BounceOutLeft.delay(100 * index)}
        key={item.id}
      >
        <RoomsCard
          title={item}
          handleOnLongPress={() => handleOnLongPress(index)}
          handleOnPress={() => handleRoomsDetail(item)}
        />
      </Animated.View>
    );
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
        <FloatingButton onPress={() => setVisible(true)} />
      </View>
      <ContentInputModal
        visible={visible}
        onClose={() => setVisible(!visible)}
        onSend={writeUserData}
      />
    </View>
  );
};

export default RoomsPages;
