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