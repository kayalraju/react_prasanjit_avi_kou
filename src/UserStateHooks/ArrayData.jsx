import React, { useState } from 'react'

const ArrayData = () => {

    const student=[
        {
            name:"pritam",
            age:"20"
        },
        {
            name:"pritam 1",
            age:"23"
        },
        {
            name:"pritam 2",
            age:"22"
        },
        {
            name:"pritam 3",
            age:"21"
        },
    ]
    
    const [stu,setStu]=useState(student)
    console.log(stu);
  return (
    <div>
      <h1>Arra of objrct data fetch</h1>
      {
        stu.map((data,index)=>{
            return(
                <>
                <h1>{index}  {data.name} {data.age}</h1>
                </>
            )
        })
      }
    </div>
  )
}

export default ArrayData
