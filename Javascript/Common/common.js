                                        //Object
import funct from './common2.js';


// Object Creating 1 
let item={

    name:"prasath",
    price:2500, 
    quantliy:1,
    data1:[1,2,3,4],
    data:{ 
        name:"Vignesh",
        age:34
    }

}

console.log(item.data)


// Another Way to create Object 
let item2 = new Object()

item2.name="Kandhan";
item2.price=400
item2.quantliy=2

console.log(item2.name)

                        //Loops 

/*
1.for loop 
2.while loop 
3.do while 
*/

//1.for loop 
for(let i=10; i>=1; i--){

 console.log(i);  

} 



    //Function 

/*

1.Function Declaration 
2.Variable Function or Function Expression 
3.Arrow Function 
4. 


*/

// 1.Function Declaration 

// let positiveValue= prompt("Enter the number");


// console.log(isPositive(positiveValue));  //Hoisting 

function isPositive(num){

    if( num>0){
        return "Positive "
    }else{

        return "Negative"
    }

}


//2. Function Expression / Variable Function 


let ReturnName = function (fname){

        return fname

}

console.log(ReturnName("Prasath"));


// 3.Arrow Function 


let arrowFunction = (data)=>{
 
   return data 

}

console.log(arrowFunction("Kandhan"));



// Spread Operators / rest parameters  (...args) -> It is getting the unlimited values after you loop to get the values 
// instead using argument also it is also store argument values

let arr=[1,2,3,4,5,6,7,8]


let filterValue= (...args)=>{

    for(let val of args){
        return val
    }
}


console.log(filterValue(arr))



//Generator -> It's Generate Value one by one 1 to infinity 
//Callback  -> Function passing as a arugement "Best Example forEach()"



// ES6 Modules 

funct.arrowfunction()
funct.variablefunction()
funct.normalfunction()


//Synchronous and Asynchronous


// Synchronous - It is blocking 
// Asynchronous - It is not blocking 


// Call Stack - > Browser -> Call Back Queue - > Event Loop -> Call Stack 

setTimeout(()=>console.log("Step 1"),4000)
setTimeout(()=>console.log("Step 2"),2000)
setTimeout(()=>console.log("Step 3"),1000)

console.log("Step 5")

// setInterval(()=>console.log("Hello Prasath"),2000);




//Method 1 - Promise 
const tatkalBook = new Promise((resolve,reject)=>{

    let bookingSuccess = true;

    if(bookingSuccess){
        resolve()  //then - success 
    }else{
        reject()   //catch  -failure 
    } 


})


// This place to calling the promise 
tatkalBook.then(success)
.catch(failure)


function success(){
    console.log("Booked Successfully");

}

function failure(){

    console.log("Booking Failed");

}


//Method 2 - Promise 

function ticket(){

    return new Promise((res,rej)=>{
        let condition = false 

        if(condition){

            res(50)
        }else{
            rej(0)
        }

    })
}

ticket().then((amt)=>{console.log(`I got ₹ ${amt}`)})
.catch((amt)=>{console.log(`I don't have Money ₹ ${amt}`)})

//Promise functions

/*
1. Promise.all();
2. Promise.allSettled()
3. Promise.any()
4. Promise.race()
*/





// Error Handling 

try{

    // let num=prompt("Enter a new number");
    if(isNaN(num)){
        throw "Enter the Valid Number"
    }else{
        console.log("It is your number ",num);
    }

}
catch(error){

    console.log(error);
    
}
finally{

    console.log("Success Fully Execute ")
}



// Asyn and await 

// async - always return promise 
// await - It is only valid in async function 


function data(){

    return new Promise((resolve,reject)=>{
        let data=false 
        if(data){
            resolve("Data Received")
        }else{
            reject("Data is not Received")
        }


    }) 
}

async function asyncstatus(){
    console.log("Hello");
    try{
        let res=await data()
         console.log(res);
    }
    catch(error){
        console.log(error);
    }
}

asyncstatus()
 

//JSON - JavaScript Object Notation 
//API - Applicaiton Programming Interface 


// GET  Request 
let posts=fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(msg=>console.log(msg[1]))
.catch((error)=>console.log(error))

// POST Request 
 