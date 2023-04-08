
import axios from 'axios'
import React,{useState,useEffect} from 'react'

const AxiosFetchUserData = () => {
  const [user, setUser] = useState([])
  const BaseUsrl='https://jsonplaceholder.typicode.com'

  const getData = async () => {
    try {
        const response = await axios.get(`${BaseUsrl}/users`)    
        setUser(response?.data)
    } catch (error) {
        console.log('erroro', error);
    }

}
useEffect(() => {
  getData()
}, [])
console.log(user);
  return (
    <div>
      <h1>Axios fetch user data</h1>
      {
        user.map((userdata)=>{
          return(
            <>
            
            <h1>{userdata.name}</h1></>
          )
        })
      }
    </div>
  )
}

export default AxiosFetchUserData
