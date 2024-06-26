import { StyleSheet, Text, View, TouchableOpacity, ScrollView,  } from 'react-native'
import React from 'react'
import { formatDistance, parseISO, } from 'date-fns'
import { tr } from 'date-fns/locale'

const RoomsCard = ({title, handleOnPress}) => {

  const formatDate = formatDistance(parseISO(title.date), new Date(),
   { addSuffix: true, locale: tr })

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll_container} >
        <View>
          <TouchableOpacity style={styles.innerContainer} onPress={handleOnPress}>
            <Text style={styles.title_box}>{title.roomName}</Text>
            <Text style={styles.date_box}>{formatDate}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default RoomsCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC805',
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 20,
        height: 60, 
        justifyContent: 'center',
        alignContent: 'center',
      },
      scroll_container:{
        flex: 1,
      },
      innerContainer: {
        flex:1,
        padding: 15,
        height:60,
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems: 'center',
  
      },
      title_box: {
        color: '#1c1c1c',
        fontWeight: 'bold',
      },
      date_box:{
        color: '#1c1c1c',

      }
})