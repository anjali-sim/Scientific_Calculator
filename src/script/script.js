function display(value) {
    input.value += value;
       
}

// 3rd Row Buttons
  // Trigonometry Functions
  // returns the sine of a number in radians (but multiplied it by 180 to convert it to radians)
  function sin() {
    if(deg == 0) {
        input.value = Math.sin((Math.PI / 180) * input.value);
    }
    else{
        input.value = (Math.sin(input.value));
    }
  }
  // returns the cosine of a number in radians (but multiplied it by 180 to convert it to radians)
  function cos() {
    if(deg == 0) {
    input.value = Math.cos((Math.PI / 180) * input.value);
    }
    else {
        input.value = (Math.cos(input.value));
    }
  }
  // returns the tangent of a number in radians (but multiplied it by 180 to convert it to radians)
  function tan() {
    if(deg == 0) {
        input.value = Math.tan((Math.PI / 180) * input.value);
    }
    else {
        input.value = (Math.tan(input.value));
    }
  }
  // returns cot by using 1 / tan function
  function cot() {
    if(deg == 0) {
        input.value = 1 / Math.tan((Math.PI / 180) * input.value);
    }
    else {
        input.value = 1 / Math.tan(input.value);
    }
  }
  // returns cot by using 1 / cos function
  function sec() {
    if(deg == 0) {
        input.value = 1 / Math.cos((Math.PI / 180) * input.value);
    }
    else {
        input.value = 1 / Math.cos(input.value);
    }
  }
  // returns cot by using 1 / sin function
  function cosec() {
    if(deg == 0) {
        input.value = 1 / Math.sin((Math.PI / 180) * input.value);
    }
    else {
        input.value = 1 / Math.sin(input.value);
    }
  }

function floor() {
    input.value = Math.floor(input.value);
  }
  // always rounds up and returns the smaller integer greater than or equal to a given number
  // Eg: 5.23 = 6
  function ceil() {
    input.value = Math.ceil(input.value);
  }
  // returns a random number from 0 up to but not including 1
  // Eg: 0.8535283651436478
  function rand() {
    input.value = Math.random();
  }
  // returns the absolute value of a number
  // Eg: -6.235 = 6.235
  function mod() {
    input.value = Math.abs(input.value);
  }

  function pi() {
    input.value = Math.PI;
  }
  // displays the value of Euler's number
  // Eg: 2.718281828459045
  function euler() {
    input.value = Math.E;
  }
  // clears the input field
  function clearAll() {
    input.value = "";
  }
  // removes one number from the end
  function remove() {
    input.value = input.value.slice(0, -1);
  }

  let deg = 0;
  function deg_to_radian() {
    if (deg == 0) {
        deg = 1;
        document.getElementById("deg").innerHTML = "RAD";
    }
    else {
        deg = 0;
        document.getElementById("deg").innerHTML = "DEG";
    }

}
  // displays answers in scientific notation
  function fe() {
    input.value = Number(input.value).toExponential().toString();
  }

    // 5th Row Buttons
  //returns square of a number
  // Eg: 5^2 = 25
  function square() {
    input.value = Math.pow(input.value, 2);
  }
  // divide 1 / number
  // Eg: 1/2 = 0.5
  function byX() {
    input.value = 1 / input.value;
  }
  // returns the value of E^x, where E is Euler's number
  // Eg: E^5 = 148.4131591025766
  function exponent() {
    input.value = Math.exp(input.value);
  }
  function modulo(x, y) {
    input.value = x%y;
  }
  
  // 6th Row Buttons
  // returns the square root of a number
  // Eg: sqaureRoot(25) = 5
  function sqrRoot() {
    input.value = Math.sqrt(input.value);
  }
  // returns the factorial of a number
  // Eg: 5! = 120
  function factorial() {
    let number = Number(input.value);
    if (number == 0 || number == 1) {
      input.value = "1";
    } else if (number > 1) {
      for (let i = number - 1; i > 1; i--) {
        number = number * i;
      }
      input.value = number;
    }
  }
  
  // gives 10 to the power of a number
  // Eg: 10^3 = 1000
  function raise_to_10() {
    input.value = Math.pow(10, input.value);
  }
  // returns log10 of a number
  function log() {
    input.value = Math.log10(input.value);
  }
  // returns ln of a number
  function ln() {
    input.value = Math.log(input.value);
  }
  //returns a number raised to another number
  let x, y;
  function x_raise_y() {
    input.value += "^";
  }
  // clears one number from the right end
  function backspace() {
    var a = input.value;
    input.value = a.substr(0, a.length - 1);
  }
  function signChange() { 
    input.value = (-1) * (input.value);
  }

  function cr() {
    document.getElementById("mc").disabled = false;
    document.getElementById("mr").disabled = false;
  }
  // function to clear the memory
  memory_stack = [];
  function memory_clear() {
    memory_stack = [];
  }
  // function to recall the memory
  function memory_recall() {
    input.value = memory_stack[memory_stack.length - 1].toString();
  }
  // function to add a specific number to a memory
  function memory_add() {
    cr();
    if (memory_stack.length == 1) {
      memory_stack.push(parseInt(input.value));
    } else {
      memory_stack[memory_stack.length - 1] += parseInt(input.value);
    }
  }
  // function to subtract a specific number from the memory
  function memory_sub() {
    cr();
    if (memory_stack.length == 0) {
      memory_stack.push(-1 * parseInt(input.value));
    } else {
      memory_stack[memory_stack.length - 1] -= parseInt(input.value);
    }
  }
  // function to save the memory
  function memory_save() {
    cr();
    if (memory_stack.length == 0) {
      memory_stack.push(parseFloat(input.value));
    } else {
      console.log("add");
      memory_stack.push(parseFloat(input.value));
    }
  }
let logx = 0;
function logx_base_y(value){
  input.value += value;
  log = 1;
}
