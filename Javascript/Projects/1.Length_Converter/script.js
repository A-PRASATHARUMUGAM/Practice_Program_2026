


function convert(){

const cmVal=document.getElementById('input').value ;
const  inchVal=Number(cmVal/2.54);

const result =document.getElementById('result');

result.innerHTML= inchVal.toFixed(4)+" inches";

}




  

    