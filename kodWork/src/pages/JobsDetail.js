import { StyleSheet, Text, View, Alert  } from 'react-native'
import React, {useState} from 'react'
import JobsDetailCard from '../components/JobsDetailCard'
import useFetch from '../hooks/useFetch/useFetch'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useDispatch } from 'react-redux'
import { favAdd,  } from '../redux/slice'


const JobsDetail = ({navigation, route,}) => {
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const {id} =  route.params
  const {data, loading, erorr} = useFetch('https://www.themuse.com/api/public/jobs/' + id )
  
  const dispatch = useDispatch();


  const addFavorites = () => {
    
    if (!alreadyAdded) {
      dispatch(favAdd(data)); 
      setAlreadyAdded(true); 
    } else {
     
      Alert.alert('Uyarı', 'Bu iş ilanı zaten favorilerinize eklenmiştir.', [{ text: 'Tamam' }]);
    }
  };


  if(loading){
    return <Loading/>
  }
  if(erorr){
    return <Error/>
  }

  const handleOnPress = () =>{
    navigation.navigate('Jobs')
  }
 
  return (
    <View>
      <JobsDetailCard detail={data} onFavPress={addFavorites} removePress={handleOnPress}  />
    </View>
  )
}

export default JobsDetail

const styles = StyleSheet.create({})