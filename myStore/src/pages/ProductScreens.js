import { StyleSheet, Text, View, FlatList, } from 'react-native';
import { useFetch } from '../hooks/useFetch';
import {LoadingAnimation, ErrorAnimation, ProductCard, } from '../components'

const ProductScreens = ({navigation}) => {
  
    const {data, loading, error, } = useFetch(process.env.EXPO_PUBLIC_API_URL);

    const handleProductSelect =(id) =>{
      navigation.navigate('DetailScreens', {id});
    }

    const renderProduct = ({item}) => (
      <ProductCard product={item} onSelect={ () => handleProductSelect (item.id)} />
    )

    if(loading){
      return <LoadingAnimation/>
    }

    if(error){
      return <ErrorAnimation/>
    }

  return (
      <FlatList data={data} renderItem={renderProduct} />
  )
  
}

export default ProductScreens

const styles = StyleSheet.create({})