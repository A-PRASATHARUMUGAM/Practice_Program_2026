const newfunct= ()=>{

    console.log("Hello World ");
    
}

newfunct()



//Global Object //  window -> global 
console.log(globalThis)


global.setTimeout(()=>{
    console.log("Hello World ")
    clearInterval(inter)
},4000)


let inter =setInterval(()=>{

    console.log("It is setInterval ")
},2000)


// D:\Program\Practice_Program_2026\Node
console.log(__dirname);


// D:\Program\Practice_Program_2026\Node\hello.js
console.log(__filename);



 