import { useState } from 'react'
import Navbar from './components/Navbar'
import Practice from './components/Practice'
import HTML from "./assets/tour2.jpg"
import DataList from './components/DataList'



function App() {
  return (
    <>
      <Navbar/>
      {/* <Practice name="HTML" show={true} rating="5 Start" price="This HTML Price : $500" image={HTML}/>
      <Practice name="Java" show={true} rating="5 Start" price="This jave  Price : $500" image={HTML}/> */}
       <DataList/>  

    </>
  ) 
} 
 
export default App
 