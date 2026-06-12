                                        //Object

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


