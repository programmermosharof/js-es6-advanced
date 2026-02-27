let name = "Global Mosharof"; // Global

function showName() {
    let name = "Local Mosharof"; // Local Scope
    if (true) {
        let name = "Block Mosharof"; // Block Scope
        console.log(name); // Ki print hobe? "Block Mosharof"
    }
    console.log(name); // Ekhane print hobe "Local Mosharof"
}
showName();



function showName2() {
    var age = 30; // Function Scope
    if (true) {
        var age = 40; // Same variable, function scope e thakbe
        console.log(age); // Ekhane print hobe "40"
    }
}
console.log(age);
showName2(); // Ekhane print hobe "40" karon var age function scope e thakbe, block scope e na.