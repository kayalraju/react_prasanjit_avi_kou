import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import { CretateContex } from './Contex/CretateContex'

const ContexRouting = () => {
  return (
    <>
    <CretateContex>
    <Router>
       
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>  
       </Routes>
       
     </Router>
    </CretateContex>
   
      
    </>
  )
}

export default ContexRouting
