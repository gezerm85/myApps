import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { formatDistance, parseISO } from "date-fns";
import { tr } from "date-fns/locale";
import styles from "./RoomsCard.style";

const RoomsCard = ({ title, handleOnPress, handleOnLongPress }) => {
  const formatDate = formatDistance(parseISO(title.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll_container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            onLongPress={handleOnLongPress}
            style={styles.buttonContainer}
            onPress={handleOnPress}
          >
            <Text style={styles.title_box}>{title.roomName}</Text>
            <Text style={styles.date_box}>{formatDate}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RoomsCard;
