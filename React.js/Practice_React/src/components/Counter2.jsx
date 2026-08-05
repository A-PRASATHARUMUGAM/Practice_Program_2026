import React, { useState } from "react";


// Three type of function 

export const Counter2 = ()=>{

    console.log("Hello World");

  const [count,setCount]=useState(0);

//    Method 1 

const handleIncrement = ()=>{
      return  setCount(count + 1);

}
const handleDecrement = ()=>{
      return setCount(count - 1) ;

}

const handleReset = ()=>{

    return setCount(0);
}



    
    return (

        <>
        {/* Method 1 */}
        {/* <h1>Counter M1 :{count}</h1>

        <button onClick={()=>{setCount(count+1)}} className="border border-black p-1">+</button> 
        <button onClick={()=>{setCount(count-1)}} className="border border-black p-1">-</button> 
         */}


         {/* Method 2 */}
{/* 

          <h1>Counter M2  :{count}</h1>

        <button onClick={()=>{
               setCount((prevState)=>{

                return prevState+1;

               }) 


        }}  
        
        className="border border-black p-1">+</button>  */}

    
        {/* Method 3 */}
            <h1>Counter M3 :{count}</h1>

        <button onClick={handleIncrement} className="border border-black p-1">+</button> 
        <button onClick={handleDecrement} className="border border-black p-1">-</button> 
        <button onClick={handleReset}>Reset Button</button>
        
        {arrofobject.map((value, index)=>{
            return(
                <div key={index} className="border border-black flex gap-2 p-2">
                    <p>{value.name}</p>
                    <p>{value.age}</p>


                </div>
            )


        })}



        </>



    )

}


