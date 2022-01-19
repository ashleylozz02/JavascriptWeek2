///easy///
///fictional students///
let students = [
  { fristName: "Peter", lastName: "Parker", age: "17" },
  { fristName: "Lupita", lastName: "fernadez", age: "16 " },
  { fristName: "Sam", lastName: "Hwang", age: "18" },
];
////my frist way to do it//// //
/*console.log(
  "Hello, my name is " +
    students[1].Fristname +
    " " +
    students[1].Lastname +
    " I'm " +
    students[1].age +
    " years old. "
);
*/
////the final easy way to read it////
let final = `Hello, my name is ${students[1].fristName} ${students[1].lastName}  I'm ${students[1].age} years old.`;

console.log(final);
