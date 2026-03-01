console.log(" JavaScript Variables ");


// It is Global Variable 
var a = 21;

// It is Local Variable

let b = 22; 


//It is Local Variable but is constant value 

const c = 23



// Example 

// var 

if(true){
var globalvar= "Prasath";

// let
let localvar="Kandhan"

console.log("true");
    
}else{
    console.log("false");
}

// Global Variabel 
console.log(globalvar);

// Local Variable 
// console.log(localvar);





// 1. let can't Redeclaration 

// let b=25;
// console.log(b);


//2. const can't Redeclaration and Reassign


// Redeclaration 
//  const c=24;

//Reassign 
// c=25 

 console.log(c);  
 

//  3. const can be Reassign using Object 

const student = {fname : "prasath", age:21}

// Reassign the const
console.log(student.fname= "kandhan");
 
console.log(student.fname);



