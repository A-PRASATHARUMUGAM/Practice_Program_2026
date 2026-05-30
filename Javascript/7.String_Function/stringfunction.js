console.log("String Function")


let str1 = 'Nothing is Completely Original'
let str2 = ' Creativity is Collection of influences'

console.log(str1+str2);

// Concat 
console.log(str1.concat(str2));

console.log(" ----- slice ---- ")
//slice 
console.log(str1.slice(4,10));

console.log(str1.slice(4));

console.log(str1.slice(-5));

console.log(" ----- substring ---- ")
//substring 
console.log(str1.substring(4,10));

console.log(str1.substring(4));

console.log(str1.substring(-5));

console.log(" ----- substr ---- ")
//substr
console.log(str1.substr(4,10))

//replace 
console.log(str1.replace('Nothing', 'Everything'));

//replaceAll
console.log(str1.replaceAll('Nothing', 'Everything'));

//toUpperCase()
console.log(str1.toUpperCase()); 

//toLowerCase()
console.log(str1.toLowerCase()); 

//length - Just a property 
console.log(str1.length);

//trim 
console.log(str2.trim()); 

//trimStart
console.log(str2.trimStart()); 

//trimEnd 
console.log(str2.trimEnd());

// padEnd 
let Price = "₹50"

console.log(Price.padEnd(4,"0")); 

//padStart
console.log(Price.padStart(4,0)); 

//index - give number to got char
console.log(str1[9]);
 
//charAt()
console.log(str1.charAt(9))

//char
console.log(str1.charCodeAt(9));

//indexof- give char to got num
console.log(str1.indexOf("s")) 

//lastindexof - search form lastindex
console.log(str1.lastIndexOf("s"));

// indexof - No character in the string return -1 
console.log(str1.indexOf("z"));

// search - it is return index 
console.log(str1.search('Complete'));
console.log(str1.search('Data')); 
 
//includes - it is return true or false 
console.log(str1.includes("N"));
console.log(str1.includes("Z"));

//startsWith
console.log(str1.startsWith("N"))
// endsWith
console.log(str1.endsWith("e"))

