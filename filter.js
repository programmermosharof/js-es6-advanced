const number = [1, 2, 3, 4, 5];
const evenNumbers = number.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

const frinds = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const tomFriends = frinds.filter(friend => friend[0] === 'r');
console.log(tomFriends); // Output: ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman']

const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 },
    { name: 'David', grade: 90 }
];
const topStudents = students.filter(student => student.grade >= 90);
console.log(topStudents); 
/* Output: [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 90 }
] */