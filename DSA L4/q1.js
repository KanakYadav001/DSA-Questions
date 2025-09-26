const prompt = require('prompt-sync')();

let year = Number(prompt("Enter Your Year : "));

if(year%4==0){
  if(year%100==0){
   if(year%400==0){
    console.log("Is a Leep Year")
   }else {
    console.log("Is Not a leep year")
   }
  }
  else{
    console.log("Is A leep Year")
  }
}
else{
    console.log("Nor a Leep Year")
}