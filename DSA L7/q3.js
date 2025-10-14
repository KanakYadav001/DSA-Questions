const prompt = require("prompt-sync")();
let result;
let conti;
do {
  let num1 = Number(prompt("Enter 1st Number  : "));
  let num2 = Number(prompt("Enter 2nd Number  : "));
  let cases = Number(prompt("Enter 1. for Add  2. for Subtract 3. for Multiply 4. for Devide 5. for modular : ")
  );
  switch (cases) {
    case 1:
      result = num1 + num2;
      break;
    case 2:
      result = num1 - num2;
      break;
    case 3:
      result = num1 * num2;
      break;
    case 4:
      result = num1 / num2;
      break;
    case 5:
      result = num1 % num2;
      break;

    default:
      console.log("Enter Valid Case : ");
  }
  console.log("Your Result is : ", result);
  conti = prompt("Enter Y for Continue or N for Exit : ").toLowerCase();
} while (conti == "y");
