import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React from "react";

const CustomButton = ({btnPress, title, btnColor, btnPressColor}) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          {
            backgroundColor: pressed ? btnPressColor : btnColor,
          },
        ]}
        onPress={btnPress}
      >
        <Text style={styles.btnText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    btn:{
        width: width * 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      },
      btnText:{
        color: '#fff',
        fontWeight: 'semibold',
        fontSize: 16,
        padding: 16,
      },
});
