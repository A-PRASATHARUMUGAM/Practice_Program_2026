

console.log("hello world ")

function generate(){

    let randName=document.getElementById("randname").value;

    let nameLength=randName.length

    let randcalc=Math.floor(Math.random()*nameLength);

    let result=document.getElementById("result");
    result.innerHTML=randName.charAt(randcalc);


}
 

       