function display(value) {
    input.value += value;
       
}

// Trigonometry Functions
function sin() {
input.value = (Math.sin(Math.PI / 180 * input.value));
}
function cos() {
input.value = (Math.cos(Math.PI / 180 * input.value));
}
function tan() {
input.value = (Math.tan(Math.PI / 180 * input.value));
}
function cot() {
input.value = (1 / Math.tan(Math.PI / 180 * input.value));
}
function sec() {
input.value = (1 / Math.cos(Math.PI / 180 * input.value));
}
function cosec() {
input.value = (1 / Math.sin(Math.PI / 180 * input.value));
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