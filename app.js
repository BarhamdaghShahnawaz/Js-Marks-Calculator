

var totalMarks = 500;

var username = +prompt("Enter your name:");
var EnglishMarks = +prompt("Enter your English Marks:");
var ComputerMarks = +prompt("Enter your Computer Marks:");
var MathsMarks = +prompt("Enter your Maths Marks:");
var PhysicsMarks = +prompt("Enter your Physics Marks:");
var ChemistryMarks = +prompt("Enter your Chemistry Marks:");

var studentobtainedmarks = EnglishMarks + ComputerMarks + MathsMarks + PhysicsMarks + ChemistryMarks;

var percentage = (studentobtainedmarks / totalMarks) * 100;
console.log("Percentage: " + percentage + "%");
