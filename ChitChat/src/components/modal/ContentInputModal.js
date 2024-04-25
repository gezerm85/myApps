import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native'
import React, {useEffect, useState} from 'react'
import Modal from "react-native-modal";


const ContentInputModal = ({visible, onClose, onSend}) => {
    const [text, setText] = useState('')
    const handleSend = () => {
        if (text.trim() === '') {
            alert('Please enter a room name');
            return;
          }
        onSend(text);
        setText('')
        onClose();
      };
  return (
    <Modal
        style={styles.modal}
        isVisible={visible}
        backdropOpacity={0.5} 
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        onSwipeComplete={onClose}
        swipeDirection={'right'}
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                        onChangeText={setText}
                        value={text}
                        placeholder="Enter Room Name"
                        placeholderTextColor={'#000'}
                        multiline={true}
                        style={styles.inputbox}
                        autoCapitalize='sentences'
                        
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={handleSend}  >
                    <Text style={styles.btn_text}>Add</Text>
                </TouchableOpacity>
            </View>
    </Modal>
  )
}

export default ContentInputModal

const styles = StyleSheet.create({
    modal:{
        justifyContent: 'center',
        margin: 20,
    },
    container:{
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,
        flexDirection:'row',
    },

    input_container:{
        flex: 1,
        textAlign: 'center',
    },
    inputbox:{
        flex:1
    },
    btn:{
        width: '30%',
        height: 40,
        backgroundColor:'#CCA004',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    btn_text:{
        color: '#1c1c1c',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },

})