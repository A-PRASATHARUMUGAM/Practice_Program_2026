

//Math Random Properly use 

// 0  - 9 
let rand1 = Math.floor(Math.random()*10);

//1  - 10  
let rand2 = Math.floor(Math.random()*10+1); 

//Any Rang 50 - 100 > Math.floor(Math.random() * (max - min + 1)) + min;
let rand3 = Math.floor(Math.random()*(100- 50 + 1))+ 50;

console.log(rand1);   
console.log(rand2);      
console.log(rand3);  

// ARRAY
let name = ["prasath", "vignesh", "Sabari","Kandhan"]; 

let result = Math.floor(Math.random()*(3 - 0 + 1)) + 0;

console.log(result); 

//Find the Last Element in the Array 
console.log("Last Element in the Array",name.length-1);   

 

     

// Most Important Array Methods for Interviews
// 1.push()
// 2.pop()
// 3.shift()
// 4.unshift()
// 5.delete()

// 6.splice()
// 7.slice()

// 7.map()
// 8.filter()
// 9.reduce()
// 10.forEach()

// 11.find()
// 12.findIndex()
// 13.includes()

// 14.sort()
// 15.concat()
// 16.join()
// 17.every()
// 18.some()
// 19.flat()
// 20.Array.isArray()


            // - Back Add - return length / Remove - Returned element 

//1.push - Add the element to the end and returns new length

//2.pop  - Remove the element to the end and returned the removed element 

            // - Front Add - return length / Remove - Returned element 

//3.shift- Remove the element from start of the array and returned the removed element 

//4.unshift -Add the element from start of the array and returns new length 

// 5.delete() -> Deleted the value = "Empty the value is means undefined"


//Insert/Delete/Replace ->splice 
//6.splice() -> Deletes 2 elements starting at index  splice(Index Value, Delete Count, Replace Count)

//7. 
    
console.log(typeof [].map);      // function
console.log(typeof "".map);    // undefined
                 