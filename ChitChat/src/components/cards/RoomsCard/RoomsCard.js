import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./RoomsCard.style";
import { MaterialIcons } from '@expo/vector-icons';

const RoomsCard = ({ title, handleOnPress, onPressRemove }) => {
  

  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleOnPress}
          >
            <Text style={styles.title_box}>{title.roomName}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnRemove} onPress={onPressRemove}>
          <MaterialIcons name="delete-forever" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default RoomsCard;
