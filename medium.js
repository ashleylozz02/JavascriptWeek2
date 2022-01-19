/////medium///
/////using prompt
let userInput = prompt("Enter your month 1-12");
//Months in array///
let months = [
  "Janury",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Agust",
  "september",
  "october",
  "november",
  "December",
];
////if statement was my frist try but did not work kinda broke it ///

/*if (userInput <= 12) {
  userInput -= 1;
  console.log("months[userInput]");
} else {
  alert("Error, enter only numbers that are 1-12");
}
*/
///just my notes///
//write a function that takes one number parameter
//first loop over months

//look for month object that has Number === user's number
// log out month.Month string
///Loops//-quite difficult
for (let i = 0; i <= 12; i++) {
  switch (userInput) {
    case i:
      console.log((userInput = months[i - 1]));
      break;
  }
}
