import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import JobsCard from '../components/JobsCard'
import useFetch from '../hooks/useFetch/useFetch'
import Error from '../components/Error'
import Loading from '../components/Loading'



const Jobs = ({navigation}) => {

  const handleOnPress = (id) =>{
    navigation.navigate('JobsDetail', {id})
  }

  const {data, loading, erorr} = useFetch('https://www.themuse.com/api/public/jobs?page=1')

  const dataJobs = ({item}) => (
    <JobsCard jobs={item} onSelect={() => handleOnPress(item.id)} />
  )

    if (loading){
      return <Loading/>
    }
    if(erorr){
      return  <Error/>
    }

  return (
    <View style={styles.container} >
      <FlatList data={data.results} renderItem={dataJobs} />
    </View>
  )
}

export default Jobs

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'lightgray'
  },
})