/**
 * @function  display
 * @description  to display the number expression
 * @params  string
 * {
 * value: string
 * }
 * @returns string
 * Examples:
 * - 5+9 to 5+9
 */
function display(value) {
  input.value += value;
}

/** 
 * @function  checkInput
 * @description  to restrict the alphabets
 * @params  string
 * {
 * ob: string
 * }
 * Examples: if user enters alphabets from keyboard, then restrict it from entering the input field
 * - asfhjk to 0
 * - 5869*2 to 5869*2
 */
function checkInput(ob) {
  const invalidChars = /[^0-9|+|\-|*|/]/gi;
  if (invalidChars.test(ob.value)) {
    ob.value = ob.value.replace(invalidChars, "");
  }
}

/**
 * @function  degToRadian
 * @description  to toggle the button between degree and radian
 */
let deg = 0;
function degToRadian() {
  if (deg == 0) {
    deg = 1;
    document.getElementById("deg").innerHTML = "RAD";
  } else {
    deg = 0;
    document.getElementById("deg").innerHTML = "DEG";
  }
}

/**
 * @function  fe
 * @description  to display answer in scientific notation
 * Examples:
 * - 8.36 to 8.36e+0
 * - 63598 to 6.3598e+4
 */
function fe() {
  input.value = Number(input.value).toExponential().toString();
}

// Memory Functions
/**
 * @function  cr
 * @description  to make the buttons disabled to abled
 */
function cr() {
  document.getElementById("mc").disabled = false;
  document.getElementById("mr").disabled = false;
}
memory_stack = [];
/**
 * @function  memoryClear
 * @description  function to clear the memory
 */
function memoryClear() {
  memory_stack = [];
}
/**
 * @function  memoryRecall
 * @description  to recall the memory
 */
function memoryRecall() {
  input.value = memory_stack[memory_stack.length-1].toString();
}
/**
 * @function  memoryAdd
 * @description  to add a specific number to the last number in memory
 */
function memoryAdd() {
  cr();
  if (memory_stack.length == 1) {
    memory_stack.push(parseInt(input.value));
  } else {
    memory_stack[memory_stack.length-1] += parseInt(input.value);
  }
}
/**
 * @function  memorySub
 * @description  to subtract a specific number from the last number in memory
 */
function memorySub() {
  cr();
  if (memory_stack.length == 0) {
    memory_stack.push(-1 * parseInt(input.value));
  } else {
    memory_stack[memory_stack.length-1] -= parseInt(input.value);
  }
}
/**
 * @function  memorySave
 * @description  to save the memory in an array
 */
function memorySave() {
  cr();
  if (memory_stack.length == 0) {
    memory_stack.push(parseFloat(input.value));
  } else {
    memory_stack.push(parseFloat(input.value));
  }
}

// Trigonometry Functions
/**
 * @function  sin
 * @description  returns the sine of a number in degrees or radians
 * Examples:
 * - sin(90 rad) to 0.8939966636005579
 * - sin(90 deg) to 1
 */
function sin() {
  if (deg == 0) {
    input.value = Math.sin((Math.PI / 180) * input.value);
  } else {
    input.value = Math.sin(input.value);
  }
}
/**
 * @function  cos
 * @description  returns the cosine of a number in degrees or radians
 * Examples:
 * - cos(45 rad) to 0.5253219888177297
 * - cos(45 deg) to 0.7071067811865476
 */
function cos() {
  if (deg == 0) {
    input.value = Math.cos((Math.PI / 180) * input.value);
  } else {
    input.value = Math.cos(input.value);
  }
}
/**
 * @function  tan
 * @description  returns the tangent of a number in degrees or radians
 * Examples:
 * - tan(60 rad) to 0.320040389379563
 * - tan(60 deg) to 1.7320508075688767
 */
function tan() {
  if (deg == 0) {
    input.value = Math.tan((Math.PI / 180) * input.value);
  } else {
    input.value = Math.tan(input.value);
  }
}
/**
 * @function  cot
 * @description  returns the cotangent of a number in degrees or radians
 * Examples:
 * - cot(30 rad) to -0.15611995216165922
 * - cot(30 deg) to 1.7320508075688774
 */
function cot() {
  if (deg == 0) {
    input.value = 1 / Math.tan((Math.PI / 180) * input.value);
  } else {
    input.value = 1 / Math.tan(input.value);
  }
}
/**
 * @function  sec
 * @description  returns the secant of a number in degrees or radians
 * Examples:
 * - sec(45 rad) to 1.9035944074044246
 * - sec(45 deg) to 1.414213562373095
 */
function sec() {
  if (deg == 0) {
    input.value = 1 / Math.cos((Math.PI / 180) * input.value);
  } else {
    input.value = 1 / Math.cos(input.value);
  }
}
/**
 * @function  cosec
 * @description  returns the cosecant of a number in degrees or radians
 * Examples:
 * - cosec(60 rad) to -3.280725574403968
 * - cosec(60 deg) to 1.1547005383792517
 */
function cosec() {
  if (deg == 0) {
    input.value = 1 / Math.sin((Math.PI / 180) * input.value);
  } else {
    input.value = 1 / Math.sin(input.value);
  }
}

// Functions
/**
 * @function  floor
 * @description  always rounds down and returns the largest integer less than or equal to a given number
 * Examples:
 * - 5.85 = 5
 */
function floor() {
  input.value = Math.floor(input.value);
}
/**
 * @function  ceil
 * @description  always rounds up and returns the smaller integer greater than or equal to a given number
 * Examples:
 * - 5.23 = 6
 */
function ceil() {
  input.value = Math.ceil(input.value);
}
/**
 * @function  rand
 * @description  returns a random number from 0 up to but not including 1
 * Examples:
 * - 0.8535283651436478
 */
function rand() {
  input.value = Math.random();
}
/**
 * @function  mod
 * @description  returns the absolute value of a number
 * Examples:
 * - -6.235 = 6.235
 */
function mod() {
  input.value = Math.abs(input.value);
}

/**
 * @function  pi
 * @description  displays the value of PI
 * Examples:
 * - 3.141592653589793
 */
function pi() {
  input.value = Math.PI;
}
/**
 * @function  euler
 * @description  displays the value of Euler's number
 * Examples:
 * - 2.718281828459045
 */
function euler() {
  input.value = Math.E;
}
/**
 * @function  clearAll
 * @description  clears the input field
 */
function clearAll() {
  input.value = "";
}
/**
 * @function  remove
 * @description  removes one number from the end
 * Examples:
 * - 5.2893 to 5.289
 */
function remove() {
  input.value = input.value.slice(0, -1);
}

/**
 * @function  square
 * @description  returns square of a number
 * Examples:
 * - 5^2 to 25
 */
function square() {
  input.value = Math.pow(input.value, 2);
}
/**
 * @function  byX
 * @description  returns inverse of a number
 * Examples:
 * - 1/2 to 0.5
 */
function byX() {
  input.value = 1 / input.value;
}
/**
 * @function  exponent
 * @description  returns the value of E^x, where E is Euler's number
 * Examples:
 * - E^5 to 148.4131591025766
 */
function exponent() {
  input.value = Math.exp(input.value);
}

/**
 * @function  sqrRoot
 * @description  returns the square root of a number
 * Examples:
 * - sqaureRoot(25) to 5
 */
function sqrRoot() {
  input.value = Math.sqrt(input.value);
}
/**
 * @function  Factorial
 * @description  returns the factorial of a number
 * Examples:
 * - 5! to 120
 */
function factorial() {
  let number = Number(input.value);
  if (number == 0 || number == 1) {
    input.value = "1";
  } else if (number > 1) {
    for (let i = number-1; i > 1; i--) {
      number = number * i;
    }
    input.value = number;
  }
}

/**
 * @function  RaiseTo10
 * @description  gives 10 to the power of a number
 * Examples:
 * - 10^3 to 1000
 */
function RaiseTo10() {
  input.value = Math.pow(10, input.value);
}
/**
 * @function  log
 * @description  returns log10 of a number
 * Examples:
 * - log(2) to 0.3010299956639812
 */
function log() {
  input.value = Math.log10(input.value);
}
/**
 * @function  ln
 * @description  returns ln of a number
 * Examples:
 * - ln(2) to 0.6931471805599453
 */
function ln() {
  input.value = Math.log(input.value);
}
/**
 * @function  xRaisey
 * @description  returns a number raised to another number
 * Examples:
 * - 6^3 to 216
 */
let x, y;
function xRaisey() {
  input.value += "^";
}
/**
 * @function  signChange
 * @description  returns a number with its opposite sign
 * Examples:
 * - 7 to -7
 */
function signChange() {
  input.value = -1 * input.value;
}

let arr = [];
let numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
/**
 * @function  calculate
 * @description  to evaluate the basic expressions
 */
function calculate() {
  var input = document.getElementById("input");
  input.value = input.value.replaceAll("^", "**");
  var result = input.value;
  arr.push(input.value);
  let va = result.charAt(result.length-1);

  // Error handling
  try {
    function cal(user) {
      return new Function("return " + user)();
    }
    const output = cal(`${result}`);
 
    document.getElementById("input").value = output;
  } catch (err) {
    const errDiv = document.getElementById("error-div");
    errDiv.textContent = "Invalid Input!";
    setTimeout(() => {
      errDiv.textContent = "";
      document.getElementById("input").value = "";
    }, 2000);
  }
}

/**
 * @function  calculate
 * @description  to toggle the buttons
 */
let d = 0;
function changeDropdown(display1, display2) {
  if (d == 1) {
    for (let x of document.getElementsByClassName(display2)) {
      x.style.display = " inline-block";
    }
    for (let x of document.getElementsByClassName(display1)) {
      x.style.display = "none";
    }
    d = 0;
  } else {
    for (let x of document.getElementsByClassName(display1)) {
      x.style.display = " inline-block";
    }
    for (let x of document.getElementsByClassName(display2)) {
      x.style.display = "none";
    }
    d = 1;
  }
}

/**
 * @function  cube
 * @description  to calculate the cube of a number
 * Examples:
 * - 2^3 to 8
 */
function cube() {
  input.value = Math.pow(input.value, 3);
}
/**
 * @function  cubeRoot
 * @description  to calculate the cube root
 * Examples:
 * - 125 to 5
 */
function cubeRoot() {
  input.value = Math.cbrt(input.value);
}
/**
 * @function  logPlus
 * @description  to calculate logarithm of 1+p number
 * Examples:
 * - log1p(8) to 2.1972245773362196
 */
function logPlus() {
  input.value = Math.log1p(input.value);
}
/**
 * @function  RaiseTo2
 * @description  to calculate 2 to power of a number
 * Examples:
 * - 2^5 to 32
 */
function RaiseTo2() {
  input.value = Math.pow(2, input.value);
}
/**
 * @function  expMinus
 * @description  to calculate e^x*  -1 where x is number
 * Examples:
 * - expm1(2) to 6.38905609893065
 */
function expMinus() {
  input.value = Math.expm1(input.value);
}
/**
 * @function  eRaisex
 * @description  to calculate e^x where x is number
 * Examples:
 * - e^2 to 7.3890560989306495
 */
function eRaisex() {
  input.value = Math.pow(Math.E, input.value);
}
