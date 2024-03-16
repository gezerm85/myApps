import { StyleSheet, Text, View, useWindowDimensions, ScrollView, Dimensions, Pressable  } from 'react-native'
import React from 'react'
import RenderHTML from 'react-native-render-html'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const JobsDetailCard = ({detail, onFavPress, removePress}) => {

  const { width } = useWindowDimensions();
  

  return (
  <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.container}>
      <View style={styles.body_container}>
      {detail && detail.name && <Text style={styles.title}>{detail.name}</Text>}
        <View style={styles.location_container}>
          <Text style={styles.location_title}> locations:</Text>
          {detail && detail.locations && detail.locations[0] && <Text style={styles.location}>{detail.locations[0].name}</Text>}
        </View>
        <View style={styles.level_container}>
          <Text style={styles.levels_title}> levels:</Text>
          {detail && detail.levels && detail.levels[0] && <Text style={styles.levels}>{detail.levels[0].name}</Text>}
        </View>
          <Text style={styles.Detail_title}>Job Detail</Text>
      </View>
      <View style={styles.content}>
        {detail && detail.contents && <RenderHTML source={{ html: detail.contents }} contentWidth={width} />}
      </View>
      <View style={styles.btn_container} >
       <Pressable style={styles.btn} onPress={removePress} >
          <Ionicons name="exit-outline" size={24} color="white" />
          <Text style={styles.btn_text}>Submit</Text>
       </Pressable>
       <Pressable style={styles.btn} onPress={onFavPress} >
          <MaterialIcons name="favorite" size={24} color="white" />
          <Text style={styles.btn_text}>Favorite Job</Text>
       </Pressable>
      </View>
    </View>
  </ScrollView>
  )
}

export default JobsDetailCard

const styles = StyleSheet.create({
  container:{

  },
  body_container:{
    
    backgroundColor:'lightgray'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    
  },
  location_container:{
    flexDirection:'row',
    marginVertical: 10,
  },
  location_title:{
    color:'#c43131',
    fontWeight:'bold',
  },
  location:{
    fontWeight:'bold',
  },
  level_container:{
    flexDirection:'row',
    marginBottom:10,
  },
  levels_title:{
    color:'#c43131',
    fontWeight:'bold',
  },
  levels:{
    fontWeight:'bold',
  },
  Detail_title:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize: 18,
    
  },
  content:{
    paddingHorizontal: 10,
  },
  btn_container:{
    flexDirection:'row',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor:'#c43131',
    width: '40%',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    flexDirection:'row',
    justifyContent: 'center',
    
  },
  btn_text:{
    color:'white',
    textAlign:'center',
    marginHorizontal:5,
  }

})