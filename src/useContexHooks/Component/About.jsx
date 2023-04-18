import React, { useContext } from 'react'
import { UserContex } from '../Contex/CretateContex'

const About = () => {
  const userData = useContext(UserContex)
  console.log('user-',userData);
  return (
    <>
      {
        userData?.map((user)=>{
          return(
            <>
            {user.name}
            </>
          )
        })
      }
    </>
  )
}

export default About
