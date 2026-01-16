import React from 'react'
import { useState, useEffect } from 'react'

function useFetch(url, options = {}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setError] = useState(null)

    useEffect(()=>{
        const controller = new AbortController()

        const fetchData = async () =>{
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(url, {...options, signal : controller.signal})
                
                if(!response.ok){
                    throw new Error(`Error ${response.status}: ${response.statusText}`)
                }

                const result = await response.json()
                setData(result)
                
            } catch (error) {
                if(error.name === 'AbortError') return ; 

                setError(error)
                setData(null)

            } finally{
                setLoading(false) 
            }
        }   
        fetchData()
        return () => controller.abort()
        
    }, [url, JSON.stringify(options)])

    return {data, loading, errorMessage}
}

export default useFetch