import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { ErrorAnimation, LoadingAnimation, DetailCard, } from '../components';



const DetailScreens = ({route}) => {
    const {id} = route.params
    const {data, loading, error, } = useFetch(`${process.env.EXPO_PUBLIC_API_URL}/ ${id} `);

    if(loading){
        return <LoadingAnimation/>
      }
  
    if(error){
        return <ErrorAnimation/>
      }
  return (
    <DetailCard data={data}/>
  )
}

export default DetailScreens

const styles = StyleSheet.create({})