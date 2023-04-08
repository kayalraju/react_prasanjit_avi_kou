import React, { useEffect, useState } from 'react'

const CountNumber = () => {
    const [counttime,setCountTime]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCountTime((count)=> count+1)
        },1000)
        console.log('hiiii');
    },[])

  return (
    <div>
      <h1>Count Number</h1>

      <h1>{counttime}</h1>
    </div>
  )
}

export default CountNumber
