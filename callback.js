// (Optional) Callback function and pass different functions as arguments to the callback function
function greeting(name) {
    console.log("Hello " + name);
}
function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}
processUserInput(greeting); // Output: Hello Alice

// Another example with different callback functions
function add(a, b) {
    return a + b;
}       
function multiply(a, b) {
    return a * b;
}   
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(5, 3, multiply)); // Output: 15







// Prothom Function (The Boss)
function processUser(name, callback) {
    console.log("Processing user: " + name);
    callback(name); // Ekhane callback function-ta call hocche
}

// Callback Function 1: Shudhu welcome janabe
function welcomeMsg(n) {
    console.log("Welcome to our website, " + n);
}

// Callback Function 2: Goodbye janabe
function goodbyeMsg(n) {
    console.log("Goodbye, " + n + ". See you again!");
}

// Different function pass kora:
processUser("Mosharof", welcomeMsg); 
processUser("Mosharof", goodbyeMsg);