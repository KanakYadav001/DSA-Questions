const prompt = require("prompt-sync")()


let userInput ;

do {
    console.log("Namasta Duniya")
   userInput = prompt("If you want to More Print write yes/no  : ").toLowerCase()

}
while(userInput==="yes")

console.log("Thanks for using !")    