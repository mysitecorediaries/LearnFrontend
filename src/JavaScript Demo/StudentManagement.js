// ------------------------------
// 1. JavaScript Variables
// ------------------------------
let students = []; // Array to store student objects
let studentIdCounter = 1;

// ------------------------------
// 2. Classes and Objects
// ------------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age); // Inheriting from Person
    this.id = studentIdCounter++;
    this.marks = marks;
  }

  // Method using Operators
  calculateGrade() {
    let avg = this.marks.reduce((sum, val) => sum + val, 0) / this.marks.length;
    return avg >= 75 ? "A" : avg >= 50 ? "B" : "C";
  }
}

// ------------------------------
// 3. Mixins (Extra Abilities)
// ------------------------------
const HobbyMixin = {
  setHobby(hobby) {
    this.hobby = hobby;
  },
  getHobby() {
    return this.hobby || "No hobby set";
  }
};
Object.assign(Student.prototype, HobbyMixin);

// ------------------------------
// 4. Interaction with Alert, Prompt, Confirm
// ------------------------------
function addStudent() {
  let name = prompt("Enter student name:");
  let age = prompt("Enter student age:");

  if (!name || !age) {
    alert("Invalid input! Student not added.");
    return;
  }

  let marksInput = prompt("Enter marks separated by commas (e.g. 80,70,90):");
  let marks = marksInput.split(",").map(m => Number(m.trim()));

  // Confirm before saving
  let confirmSave = confirm(`Do you want to save student ${name}?`);
  if (!confirmSave) {
    alert("Student not saved.");
    return;
  }

  let student = new Student(name, age, marks);

  let hobby = prompt("Enter student's hobby (optional):");
  if (hobby) student.setHobby(hobby);

  students.push(student);
  alert(`Student ${name} added successfully!`);
}

// ------------------------------
// 5. Display Students (Array Usage)
// ------------------------------
function showStudents() {
  if (students.length === 0) {
    alert("No students found!");
    return;
  }

  let output = "<h3>Student Records</h3><ul>";
  students.forEach(s => {
    output += `<li>
      <b>ID:</b> ${s.id}, 
      <b>Name:</b> ${s.name}, 
      <b>Age:</b> ${s.age}, 
      <b>Grade:</b> ${s.calculateGrade()}, 
      <b>Hobby:</b> ${s.getHobby()}
    </li>`;
  });
  output += "</ul>";
  document.getElementById("output").innerHTML = output;
}
