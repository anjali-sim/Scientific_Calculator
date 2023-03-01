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