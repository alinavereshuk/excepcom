// Define a person interface
interface Person {
  name: string;
  age: number;
  salary: number;
}

// Create a person object
const person: Person = {
  name: 'Sadik',
  age: 30,
  salary: 15000,
};

// Log the person's details
console.log(`Name: ${person.name}, Age: ${person.age}, Salary: ${person.salary}`);
