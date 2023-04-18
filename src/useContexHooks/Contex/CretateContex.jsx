import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const UserContex=createContext()

export const CretateContex = ({children}) => {
    const [user, setUser] = useState([])
    const getUser = async () => {
        const BaseUrl='https://jsonplaceholder.typicode.com'
        const response = await axios.get(`${BaseUrl}/users`)
        setUser(response?.data)
    }
    useEffect(() => {
        getUser()  
        
     
    }, [])
console.log(user);
  return (
    <>
    <UserContex.Provider value={user}>
        {children}
    </UserContex.Provider>
      
    </>
  )
}


