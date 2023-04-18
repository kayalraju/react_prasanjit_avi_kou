import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContex } from '../Contex/CretateContex'


const Home = () => {
  const userData=useContext(UserContex)
  console.log('user',userData);
  return (
    <div>
      <h1>Home page   <Link to='/about'>About</Link></h1>
      <hr />
{
  userData?.map((user)=>{
    return(
      <>
      <h1>{user.name}</h1>
      </>
    )
  })
}

    </div>
  )
}

export default Home
