// (Advanced) Explore closure in details
function outer() {
  let count = 0;        
    function inner() {  
        count++;
        console.log(count);
    }
    return inner;
}
const increment = outer(); // increment is now a closure that has access to the count variable
console.log(increment);

increment(); // Output: 1
increment();



function createCounter(owner) {
    let count = 0;
   function increment() {
        count = count + 1;
         console.log('Value of counter:' , owner, count);
    };
    return increment;
}
const munsef = createCounter("Munsef");
munsef(); 
munsef(); 
munsef(); 
munsef(); 
const sami = createCounter("Sami");
sami(); 
sami();
munsef();