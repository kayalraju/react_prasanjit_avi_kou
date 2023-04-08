import React,{useState,useEffect} from 'react'
import GetUser from './GetUser'

const User = () => {
  const [user, setUser] = useState([])
  const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUser(data)
      

    } catch (error) {
        console.log('erroro', error);
    }

}
useEffect(() => {
  getData()
}, [])

  return (
    <>
      <h1>Pass Api data using props</h1>
      <GetUser users={user}/>
    </>
  )
}

export default User
