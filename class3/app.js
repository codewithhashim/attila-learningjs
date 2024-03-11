// ternary operator

// exp ? 1 : 1;

// conditional statements
// some kind of condition to check before performing any action.
// statement - piece of code

// if statement

// syntax

// if is a keyword
// if (condition) {
//     // effect
// }

if (2 != 2) {
  console.log("Trueee it isss ....");
} else if (3 == 3 && 6 == 6) {
  // nested if statement
  //   if (6 == 6) {
  //     console.log("6 = 6 ");
  //   }
  console.log("3 is = 3");
} else {
  console.error("opoppss");
}

let number = 1;

switch (number) {
  case 1:
    if (true) {
      // console.log("yes we can use if statements in here");
    }
    // console.log("yes 1");
    break;

  case 2:
    // console.log("yes 2");
    break;

  default:
  // console.log("Sorry the value dosent match our records.");
}

// concatenation
let names = "Eli";
// console.log("string 1" + "string 2" + names);

//  template literal syntax
console.log(` String 1 ${names} is combined with string 2 and yes it is done by ${names} 32456387 `);
