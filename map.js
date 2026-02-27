const number = [1, 2, 3, 4, 5];



const doubleIt = num => num * 2;
const doubled = number.map(doubleIt);
console.log(doubled);
const squared = number.map(num => num * num);
console.log(squared);

// const double = [];

// for(const num of number) {
//     double.push(num * 2);
// }
// console.log(double);
// const double = number.map(function(num) {



const frinds = [ 'Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = frinds.map(friend => friend[0]);
console.log(firstLetters);


const users = ["mosharof", "rakib", "siam"];

// Map prottekta nam-ke uppercase kore notun array-te rakhbe
const upperUsers = users.map(name => {
    return name.toUpperCase(); 
});

console.log(upperUsers); 
// Output: ["MOSHAROF", "RAKIB", "SIAM"]

// forEach shudhu ekta ekta kore nam nibe ar console korbe
users.forEach(name => {
    console.log("Hello, " + name + "!");
});

/* Output:
   Hello, mosharof!
   Hello, rakib!
   Hello, siam!
*/