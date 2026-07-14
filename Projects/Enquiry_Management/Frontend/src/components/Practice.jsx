import React from 'react'
import HTML from "../assets/tour2.jpg"
// import proptypes from "prop-types";

const Practice = (props) => {

  const course1 = "HTML";

  console.log("Hello world")
  // Conditional Rendering 
  if(props.show=== true ){

  return (
    <div className='m-4 inline-block'> 


      {/* Course 1 */}
      <div className="course1 border rounded-xl text-center border-violet-500 w-80 ">
        <img src={props.image} alt="" className='rounded-t-xl' />
        <div className=' p-2 hover:bg-blue-500 cursor-pointer rounded-b-xl transition-all '>
        <h1>{props.name}</h1>  
        <p>{props.price}</p>    
        <p>{props.rating}</p>   
 
        </div> 
      </div>    
  
      {/* Course 2 */}
       {/* <div className="course2 border p-10 text-center rounded-xl border-violet-500 w-80">
        <img src="" alt="" />
        <h1>CSS</h1>
        <p>This is CSS Course</p>

      </div>      */}

      {/* Course 3 */}
       {/* <div className="course3 border p-10 text-center rounded-xl border-violet-500 w-80">
        <img src="" alt="" />
        <h1>JavaScript</h1>
        <p>This is JavaScript Course</p>

      </div>    
      
        */}
 
      </div>
  )

       }
       else{

        return(
         
        <div className="course1 border rounded-xl text-center border-violet-500 w-80 ">
          <img src={props.image} alt="" className='rounded-t-xl' />
          <div className=' p-2 hover:bg-yellow-500 cursor-pointer rounded-b-xl transition-all '>
          <h1>{props.name}</h1>  
          <p>{props.price}</p>    
          <p>{props.rating}</p>   
  
          </div> 
        </div>   
        )
    

       } 


}


  
// Practice.defaultProps =({
//   name:"empty",
//   price:"empty",
//   image:HTML,
// })

// Practice.proptypes ={
//   show:proptypes.bool,
// }
      
export default Practice