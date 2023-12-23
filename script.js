const display = document.querySelector(".display input");
const buttons = document.querySelectorAll(".calculator div input");
const operators = ["%", "/", "*", "-", "+", "="];
let output="";

// console.log(display);
// console.log(buttons);

//Define function to calculate based on button clicked
const calculate = (val) => {
  // console.log(val);
  if (val === "=" && val !== "") {
    //if the operator is % then replace with '/100' before evaluating
    output = eval(output.replace("%", "/100"));
  }
  else if (val === "AC") {
    //if the operator is "AC" then clear the screen
    output = "";
  }
  else if (val === "DEL") {
    //if the output is DEL then delete the last charater in the display
    output = output.toString().slice(0,-1);
  }
  else {
    //if the output is empty and button is a special character then just return
    if (output === "" && operators.includes(val)) return;
  }
  display.value = output;
}

// add event listener to buttons, call calculate() on click of "="
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.value));
});