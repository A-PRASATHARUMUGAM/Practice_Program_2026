



function convert(){

let celsValue=document.getElementById('input').value;

let fahValue=Number((celsValue*9/5) + 32);
let result=document.getElementById('result');
result.innerHTML=fahValue+" F";



}
 