import React, { useState } from 'react'

const UseState = () => {
    const name="debjit"
    const[user,setUser]=useState(name)
    const[names,setNames]=useState('Raju kayal')

    const changeName=()=>{
        setUser("Raju")

    }

    const toggledata=()=>{
        //alert('jjjj')
        var n=names
        if(n=='Raju kayal'){
            setNames('Prasanjit')
        }else{
            setNames('Raju kayal')
        }
    }

  return (
    <div>
      <h1>use State</h1>
      <h1>{user}</h1>
      <button onClick={changeName}>Click me</button>
      <h2>{names}</h2>
      <button onClick={toggledata}>Toggle</button>
    </div>
  )
}

export default UseState
