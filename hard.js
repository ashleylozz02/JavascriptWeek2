//hard//
//Tom &Jerry Hieght//
let hieghtTom = 9;
let hieghtJerry = 8;
//Tom&jerry mass//
let massTom = 8;
let massJerry = 45;
let bmi;
//compare tom&jerry Bmi//
function calcBmi(x, y) {
  bmi = x / (y * y);
  return bmi;
}
let tomBmi = calcBmi(massTom, hieghtTom);
let jerryBmi = calcBmi(massJerry, hieghtTom);
let checker = tomBmi > jerryBmi;
///console.log the true/flase with checker//
console.log(`Is Tom’s BMI higher than Jerry’s? ${checker}`);
////this was hard overall///
