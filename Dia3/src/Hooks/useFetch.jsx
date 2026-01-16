import React from 'react'
import { useState, useEffect } from 'react'

function useFetch(url, options = {}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(url, options)
                if(!response.ok){
                    throw new Error(`Error ${response.status}: ${response.statusText}`)
                }

                const result = await response.json()
                setData(result)
                
            } catch (error) {

                setError(error)
                setData(null)

            } finally{
                setLoading(false) 
            }
        }   
        fetchData()
    }, [url, JSON.stringify(options)])

    return {data, loading, errorMessage}
}

export default useFetch