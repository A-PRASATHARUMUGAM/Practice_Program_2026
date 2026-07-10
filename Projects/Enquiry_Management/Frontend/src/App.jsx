import { useState } from 'react'
import Navbar from './components/Navbar'
import Practice from './components/Practice'
import HTML from "./assets/tour2.jpg"


function App() {
  return (
    <>
      <Navbar/>
      <Practice name="HTML" price="This HTML Price : $500" image={HTML}/>
      <Practice name="HTML" price="This HTML Price : $500" image={HTML}/>
      <Practice name="HTML"  />
      
    </>
  )
} 

export default App
 