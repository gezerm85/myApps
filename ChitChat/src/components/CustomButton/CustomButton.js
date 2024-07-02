import { Text, Pressable } from "react-native";
import React from "react";
import styles from "./CustomButton.style";

const CustomButton = ({
  btnPressColor,
  btnColor,
  setWidth,
  title,
  setTextColor,
  setPressColor,
  onPress,
  setBorder,
  setBorderColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? btnPressColor : btnColor,
          width: setWidth,
          borderWidth: setBorder,
          borderColor: setBorderColor,
        },
        styles.container,
      ]}
    >
      {({ pressed }) => (
        <Text
          style={[
            styles.title_box,
            { color: pressed ? setPressColor : setTextColor },
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default CustomButton;
