const prompt = require("prompt-sync")()
let randomNum = Math.floor(Math.random()*100)+1

 let num;
do {
     num = Number(prompt("Guss The NUmber Between 1-100  : "))
    if(isNaN(num) || num<1 || num>100) {
        console.log("Enter Valid Input ")
       continue
    }
    if(num>randomNum) console.log("This iS High");
    else if(num<randomNum) console.log("This is Low")
    else{
    console.log("Congratulation 🎊🎉 you Guss Right Number ")
     }   
    
    
    
}
while(num !==randomNum)