// Function arguments pass by reference and pass by value

function changeValue(a, b) {
    a = a - 5; // a er value change hobe, but b er value change hobe na
    b = b - 10; // b er value change hobe, but a er value change hobe na
    console.log(a, b);
    return a * b;
}
let x = 10;
let y = 20;
console.log(changeValue(x, y));