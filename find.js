const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 },
    { name: 'David', grade: 90 }
];
const topStudent = students.find(student => student.name === 'B');
console.log(topStudent);