import React, { useState } from "react";
import {data} from "../data/Dataset.js";

const Counter = () => {


    const [count, setCount] = useState(0);
    
    // Counter Method 4 
    const [products,setProducts]=useState(data);

    const [totalNumber,setTotalNumber]=useState(data.length);
 

    // Counter Method 3 
    const [countn, setCountn] = useState(0);

    const handleIncrement=()=>{
        setCountn((prevState)=>{ 
            return prevState +1; 
        })
    }

    const handleDecrement=()=>{
        setCountn((prevState)=>{

            return prevState -1;

        })
    }

    const handleReset=()=>{
        return setCountn(0);
    }

// Counter Method 4 

const handleDelete =()=>{
    setProducts([]);
    setTotalNumber(0);
}


    return (
        <>
            {/* Method 1 Counter */}

            {/* <h1>Counter:{count}</h1>
            <button className="p-2 border border-black " onClick={()=>{ setCount(count+1)}  }>+</button>
            <button className="p-2 border border-black " onClick={()=>{ setCount(count-1)}  }>-</button>
            <button className="p-2 border border-black " onClick={()=>{ setCount(0)}  }>Reset</button>
             */}

            {/* Method 2 Counter */}

            <h1>Counter Method Two: {count}</h1>
            <button
                className="p-2 border border-black "


                onClick={() => {
                    setCount((prevState) => {
                        return prevState + 1;
                    });
                }}
            >

                +
            </button>



            {/* Method 3 Counter */}

             <h1>Counter Method Three:{countn}</h1>
             <button className="p-2 border border-black " onClick={handleIncrement} >+</button>
             <button className="p-2 border border-black " onClick={handleDecrement}>-</button>
             <button  onClick={handleReset}>Reset</button>

             {/* Method 4 Counter Live Example  */}


                   <h1>Total Cart Items : {totalNumber}</h1>
            {products.map((product)=>{

                return (
                    <div key={product.product_id}>
                 
                <div  className="p-2 flex gap-2 border border-black w-max  m-1 " >

                 
                <p>Product Id:{product.product_id}</p>

                <p>Product Name:{product.product_name}</p>
                <button className="border border-black p-1 bg-red-500 text-white">Delete </button>
                
              </div>
                 
                 </div>

                ) 
            })}

            <button className=" p-2 border border-black " onClick={handleDelete} >Delete All</button>


        </>
 
    


    );
};

export default Counter;
