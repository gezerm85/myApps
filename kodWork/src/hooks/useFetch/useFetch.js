import axios from 'axios'
import React, {useEffect, useState} from 'react'

const useFetch = (url) => {

const [data, setData] = useState([])
const [loading, setLoading] = useState(true)
const [erorr, setError] = useState(null)



    const fetchData  = async () =>{
        try {
            const {data: responseData} = await axios(url)
            setData(responseData)
            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        } 
    }

    useEffect(() => {
        fetchData();
    },[])

  return {data, loading, erorr}
}

export default useFetch

