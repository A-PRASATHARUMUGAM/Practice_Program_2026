import React, { useEffect, useState } from "react";


const ShowingData=()=>{

const [data,setData]=useState([]);


async function fetchApi(){

      const response = await fetch("https://api.github.com/users");
      const result = await response.json(); 
      setData(result);
    //   console.log(result)
}

useEffect(()=>{
 


fetchApi();

})


    


    return (

        <>

        <div>

            {data.map((user, index)=>{
                    const {id, login, avatar_url }=user;
                return (
                    <div key={index}>


                        <p>{id}</p>
                        <p>{login}</p>
                        <img src={avatar_url} className="w-10 " ></img>
                    </div>
                )


            })};

            
        </div>
        
        
        
        </>
    )
}


export default ShowingData;