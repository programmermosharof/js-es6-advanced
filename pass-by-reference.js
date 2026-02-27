function firstSum(arr1, arr2) {
    // let sum = 0;
    // for (let i = 0; i < arr1.length; i++) {
    //     sum += arr1[i] + arr2[i];
    // }
    // return sum;

    arr1[0] = 100; // arr1 er first element change hobe, but arr2 er first element change hobe na
    arr2[0] = 200; // arr2 er first element change hobe, but arr1 er first element change hobe na
    console.log(arr1, arr2);
    return arr1[0] + arr2[0];
}   
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(firstSum(array1, array2)); // Output: 300









// 1. Pass by Value (Primitive Type)
// Ekhane shudhu Value-ta pass hoy. Function-er vitorer a ar baire thaka myNum duita purapuri alada jinish.

// JavaScript
let myNum = 10;

function updateValue(a) {
    a = 20; // Ekhane 'a' er value 20 hoilo, kintu baire myNum janbeo na
    console.log("Function-er vitor a:", a); // 20
}

// updateValue(myNum); // Argument hisebe 10 pathalam (Photocopy)
// console.log("Function-er baire myNum:", myNum); // 10 (Original change hoy nai)
// 2. Pass by Reference (Non-Primitive Type)
// Ekhane Address pass hoy. user variable ar function-er vitorer obj parameter—duijon-i ekoi memory address-e takiye ache.

// JavaScript
let user = { name: "Mosharof" };

function updateObject(obj) {
    obj.name = "Gemini"; // Original address-e giye name change korlo
    console.log("Function-er vitor:", obj.name); // Gemini
}

// updateObject(user); // Argument hisebe user-er Address (Reference) pathalam
// console.log("Function-er baire:", user.name); // Gemini (Original change hoye gelo!)
// 3. arguments Object (Tumi jeta image-e dekhale)
// Function-e koyta parameter (num1, num2) ache seta boro kotha na, tumi koyta argument pathachho setai ashol kotha.

// JavaScript
function add(num1, num2) {
    console.log("num1 holo:", num1); // 10
    console.log("num2 holo:", num2); // 20
    
    // Extra arguments gulo 'arguments' object-e thake
    console.log("3rd argument holo:", arguments[2]); // 30
    console.log("4th argument holo:", arguments[3]); // 40
}

add(10, 20, 30, 40);