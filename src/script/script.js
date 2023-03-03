// variable used to toggle between degree and radian buttons
let degree = 0;
// array to perform the memory operations
let memoryStack = [];
// For x raise to y function
let x, y;
// for changing the dropdowns
let dropdownChange = 0;

/**
 * @function  displayInputValue
 * @description  to display the number expression entered by the user
 * @params  string
 * value:  string
 * @returns  void
 * Examples:
 * - 5+9 to 5+9
 */
function displayInputValue(value) {
  input.value += value;
}

/**
 * @function  checkInput
 * @description  validating to restrict the alphabets in the input field
 * @params  string
 * stringExpression:  string
 * @returns  void
 * Examples: if the user enters alphabets from keyboard, then restrict it from entering into the input field
 * - asfhjk to 0
 * - 5869*2 to 5869*2
 */
function checkInput(stringExpression) {
  const invalidChars = /[^0-9|+|\-|*|.|!|^|(|)|%/]/gi;
  if (invalidChars.test(stringExpression.value)) {
    stringExpression.value = stringExpression.value.replace(invalidChars, "");
  }
}

/**
 * @function  degreeToRadian
 * @description  to toggle the button between degree(DEG) and radian(RAD)
 * @params  none
 */
function degreeToRadian() {
  // if the degree variable is set to 0, then display the RAD(radian) button else DEG(degree) button
  if (degree == 0) {
    degree = 1;
    document.getElementById("degree").innerHTML = "RAD";
  } else {
    degree = 0;
    document.getElementById("degree").innerHTML = "DEG";
  }
}

/**
 * @function  fixedToExponent
 * @description  to display the answer in scientific notation
 * @params  none
 * Examples:
 * - 8.36 to 8.36e+0
 * - 63598 to 6.3598e+4
 */
function fixedToExponent() {
  input.value = Number(input.value).toExponential().toString();
}

// Memory Functions
/**
 * @function  buttonDisableToAble
 * @description  to make the buttons disabled to abled
 * @params  none
 */
function buttonDisableToAble() {
  document.getElementById("mc").disabled = false;
  document.getElementById("mr").disabled = false;
}

/**
 * @function  memoryClear
 * @description  to clear the memory
 * @params  none
 * Examples: The memoryStack array will be empty
 */
function memoryClear() {
  memoryStack = [];
}

/**
 * @function  memoryRecall
 * @description  to recall the value stored in memory
 * @params  none
 */
function memoryRecall() {
  input.value = memoryStack[memoryStack.length - 1].toString();
}

/**
 * @function  memoryAdd
 * @description  to add a specific number to the last value in memory
 * @params  none
 */
function memoryAdd() {
  buttonDisableToAble();
  if (memoryStack.length == 1) {
    memoryStack.push(parseInt(input.value));
  } else {
    memoryStack[memoryStack.length - 1] += parseInt(input.value);
  }
}

/**
 * @function  memorySubtract
 * @description  to subtract a specific number from the last value in memory
 * @params  none
 */
function memorySubtract() {
  buttonDisableToAble();
  if (memoryStack.length == 0) {
    memoryStack.push(-1 * parseInt(input.value));
  } else {
    memoryStack[memoryStack.length - 1] -= parseInt(input.value);
  }
}

/**
 * @function  memorySave
 * @description  to save the value in memoryStack array
 * @params  none
 */
function memorySave() {
  buttonDisableToAble();
  if (memoryStack.length == 0) {
    memoryStack.push(parseFloat(input.value));
  } else {
    memoryStack.push(parseFloat(input.value));
  }
}

// Trigonometry Functions
/**
 * @function  sin
 * @description   evaluates the sine of a number in degrees or radians
 * @params  none
 * Examples:
 * - sin(90 radian) to 0.8939966636005579
 * - sin(90 degree) to 1
 */
function sin() {
  if (degree == 0) {
    input.value = Math.sin((Math.PI / 180) * input.value);
  } else {
    input.value = Math.sin(input.value);
  }
}

/**
 * @function  cos
 * @description  evaluates the cosine of a number in degrees or radians
 * @params  none
 * Examples:
 * - cos(45 radian) to 0.5253219888177297
 * - cos(45 degree) to 0.7071067811865476
 */
function cos() {
  if (degree == 0) {
    input.value = Math.cos((Math.PI / 180) * input.value);
  } else {
    input.value = Math.cos(input.value);
  }
}

/**
 * @function  tan
 * @description  evaluates the tangent of a number in degrees or radians
 * @params  none
 * Examples:
 * - tan(60 radian) to 0.320040389379563
 * - tan(60 degree) to 1.7320508075688767
 */
function tan() {
  if (degree == 0) {
    input.value = Math.tan((Math.PI / 180) * input.value);
  } else {
    input.value = Math.tan(input.value);
  }
}

/**
 * @function  cot
 * @description  evaluates the cotangent of a number in degrees or radians
 * @params  none
 * Examples:
 * - cot(30 radian) to -0.15611995216165922
 * - cot(30 degree) to 1.7320508075688774
 */
function cot() {
  if (degree == 0) {
    input.value = 1 / Math.tan((Math.PI / 180) * input.value);
  } else {
    input.value = 1 / Math.tan(input.value);
  }
}

/**
 * @function  sec
 * @description  evaluates the secant of a number in degrees or radians
 * @params  none
 * Examples:
 * - sec(45 radian) to 1.9035944074044246
 * - sec(45 degree) to 1.414213562373095
 */
function sec() {
  if (degree == 0) {
    input.value = 1 / Math.cos((Math.PI / 180) * input.value);
  } else {
    input.value = 1 / Math.cos(input.value);
  }
}

/**
 * @function  cosec
 * @description  evaluates the cosecant of a number in degrees or radians
 * @params  none
 * Examples:
 * - cosec(60 radian) to -3.280725574403968
 * - cosec(60 degree) to 1.1547005383792517
 */
function cosec() {
  if (degree == 0) {
    input.value = 1 / Math.sin((Math.PI / 180) * input.value);
  } else {
    input.value = 1 / Math.sin(input.value);
  }
}

// Functions
/**
 * @function  floor
 * @description  to round down and evaluates the largest integer less than or equal to a given number
 * @params  none
 * Examples:
 * - 5.85 = 5
 */
function floor() {
  input.value = Math.floor(input.value);
}

/**
 * @function  ceil
 * @description  to round up and evaluates the smaller integer greater than or equal to a given number
 * @params  none
 * Examples:
 * - 5.23 = 6
 */
function ceil() {
  input.value = Math.ceil(input.value);
}

/**
 * @function  random
 * @description  gives a random number from 0 up to but not including 1
 * @params  none
 * Examples:
 * - 0.8535283651436478
 * - 0.6407613844878561
 * - 0.1827885058635727
 */
function random() {
  input.value = Math.random();
}

/**
 * @function  mod
 * @description  evaluates the absolute value of a number
 * @params  none
 * Examples:
 * - -6.235 = 6.235
 */
function mod() {
  input.value = Math.abs(input.value);
}

/**
 * @function  pi
 * @description  displays the value of PI
 * @params  none
 * Examples:
 * - 3.141592653589793
 */
function pi() {
  input.value = Math.PI;
}

/**
 * @function  euler
 * @description  displays the value of Euler's number
 * @params  none
 * Examples:
 * - 2.718281828459045
 */
function euler() {
  input.value = Math.E;
}

/**
 * @function  clearAll
 * @description  to entirely clear the input field
 * @params  none
 */
function clearAll() {
  input.value = "";
}

/**
 * @function  remove
 * @description  to remove one number from the right side end once clicking on it
 * @params  none
 * Examples:
 * - 5.2893 to 5.289
 */
function remove() {
  input.value = input.value.slice(0, -1);
}

/**
 * @function  square
 * @description  performs square of a number
 * @params  none
 * Examples:
 * - 5^2 to 25
 */
function square() {
  input.value = Math.pow(input.value, 2);
}

/**
 * @function  byX
 * @description  performs inverse of a number
 * @params  none
 * Examples:
 * - 1/2 to 0.5
 */
function byX() {
  input.value = 1 / input.value;
}

/**
 * @function  exponent
 * @description  evaluates the value of E^x, where E is Euler's number
 * @params  none
 * Examples:
 * - E^5 to 148.4131591025766
 */
function exponent() {
  input.value = Math.exp(input.value);
}

/**
 * @function modulo
 * @description evaluates the remainder after dividing one number by another.
 * @params  none
 * Examples:
 * - 9%7 to 2
 * - 2%2 to 0
 */
function modulo() {
  input.value += "%";
}

/**
 * @function  squareRoot
 * @description  performs the square root of a number
 * @params  none
 * Examples:
 * - sqaureRoot(25) to 5
 */
function squareRoot() {
  input.value = Math.sqrt(input.value);
}

/**
 * @function  factorial
 * @description  performs the factorial of a number
 * @params  none
 * Examples:
 * - 5! to 120
 */
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

/**
 * @function  raiseTo10
 * @description  gives 10 to the power of a number
 * @params  none
 * Examples:
 * - 10^3 to 1000
 */
function raiseTo10() {
  input.value = Math.pow(10, input.value);
}

/**
 * @function  logarithm
 * @description  performs logarithm(log base 10) of a number
 * @params  none
 * Examples:
 * - log(2) to 0.3010299956639812
 */
function logarithm() {
  input.value = Math.log10(input.value);
}

/**
 * @function  naturalLogarithm
 * @description  performs natural logarithm(ln base e) of a number
 * @params  none
 * Examples:
 * - ln(2) to 0.6931471805599453
 */
function naturalLogarithm() {
  input.value = Math.log(input.value);
}

/**
 * @function  xRaisey
 * @description  evaluates a number raised to another number
 * @params  none
 * Examples:
 * - 6^3 to 216
 */
function xRaisey() {
  input.value += "^";
}

/**
 * @function  signChange
 * @description  gives a number with its opposite sign
 * @params  none
 * Examples:
 * - 7 to -7
 */
function signChange() {
  input.value = -1 * input.value;
}

/**
 * @function  calculate
 * @description  to evaluate the basic expressions
 * @params  none
 */
function calculate() {
  var input = document.getElementById("input");
  input.value = input.value.replaceAll("^", "**");
  var result = input.value;
  let va = result.charAt(result.length - 1);
  // Error handling
  /**
   * this try catch handles the error when user enters invalid input
   * Examples:
   * 9-6+5 = 8
   * 5-6/5* = Invalid Input!
   */
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
 * @function  changeDropdown
 * @description  to toggle the buttons
 * @params  none
 */
function changeDropdown(display1, display2) {
  /**
   * this code is for changing the dropdown on pressing the 2nd button
   * if the dropdownChange variable is set to 1 then display the display2 class buttons and vice versa
   */
  if (dropdownChange == 1) {
    for (let x of document.getElementsByClassName(display2)) {
      x.style.display = " inline-block";
    }
    for (let x of document.getElementsByClassName(display1)) {
      x.style.display = "none";
    }
    dropdownChange = 0;
  } else {
    for (let x of document.getElementsByClassName(display1)) {
      x.style.display = " inline-block";
    }
    for (let x of document.getElementsByClassName(display2)) {
      x.style.display = "none";
    }
    dropdownChange = 1;
  }
}

/**
 * @function  cube
 * @description  to calculate the cube of a number
 * @params  none
 * Examples:
 * - 2^3 to 8
 */
function cube() {
  input.value = Math.pow(input.value, 3);
}

/**
 * @function  cubeRoot
 * @description  to calculate the cube root
 * @params  none
 * Examples:
 * - 125 to 5
 */
function cubeRoot() {
  input.value = Math.cbrt(input.value);
}

/**
 * @function  logPlus
 * @description  to calculate logarithm of 1+p number
 * @params  none
 * Examples:
 * - log1p(8) to 2.1972245773362196
 */
function logPlus() {
  input.value = Math.log1p(input.value);
}

/**
 * @function  raiseTo2
 * @description  to calculate 2 to power of a number
 * @params  none
 * Examples:
 * - 2^5 to 32
 */
function raiseTo2() {
  input.value = Math.pow(2, input.value);
}

/**
 * @function  expMinus
 * @description  to calculate e^x-1 where x is number
 * @params  none
 * Examples:
 * - expm1(2) to 6.38905609893065
 */
function expMinus() {
  input.value = Math.expm1(input.value);
}

/**
 * @function  eRaisex
 * @description  to calculate e^x where x is number
 * @params  none
 * Examples:
 * - e^2 to 7.3890560989306495
 */
function eRaisex() {
  input.value = Math.pow(Math.E, input.value);
}
