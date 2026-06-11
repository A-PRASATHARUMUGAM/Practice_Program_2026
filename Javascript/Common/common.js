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
2.


*/

// 1.Function Declaration 

// let positiveValue= prompt("Enter the number");


function isPositive(num){

    if( num>0){
        return "Positive "
    }else{

        return "Negative"
    }

}

// console.log(isPositive(positiveValue));

//