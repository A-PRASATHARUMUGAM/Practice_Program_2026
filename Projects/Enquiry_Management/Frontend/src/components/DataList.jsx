import React from 'react'
import Practice from './Practice';

const DataList = () => {

    const dataList =[
        {
            id:1,
            name:"HTML",
            price:"$500",
            rating:"5"
        },
        {
            id:2,
            name:"JavaScript",
            price:"$200",
            rating:"5"
        },
        {    id:3,
            name:"React",
            price:"$400",
            rating:"5"
        },
        {
            id:4,
            name:"Java",
            price:"$600",
            rating:"5"
        }
    ]
 
    const courseList = dataList.map((course)=> 

     <Practice key={course.id} name={course.name} rating={course.rating} price={course.price}/>
       
    );


  return (
    <>
      {courseList}   
    </>
      
  );


}

export default DataList