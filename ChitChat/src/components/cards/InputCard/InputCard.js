import { Text, View, TextInput } from "react-native";
import React from "react";
import styles from "./InputCard.style";

const InputCard = ({
  placeholderText,
  title,
  secureText,
  handleChangeText,
  handleValue,
  handleBlur,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title_box}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={"#fff"}
        placeholder={placeholderText}
        secureTextEntry={secureText}
        onChangeText={handleChangeText}
        value={handleValue}
        textAlign="left"
        onBlur={handleBlur}
        autoCapitalize="none"
      />
    </View>
  );
};

export default InputCard;
