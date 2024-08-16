// Write a function that returns true if the given integer is even, and false if it's odd.


// function legalAge(age) {
//     return age >= 18
//   }

// console.log(legalAge(23));
// console.log(legalAge(13));

// function evenOrOdd(num) {
//     if (num % 2 === 0) {
//         return true;
//     } 
//     else if(num % 2 === 1) {
//         return false;
//     }
// }
// console.log(evenOrOdd(20));
// console.log(evenOrOdd(21));

//Simpler code

function evenOrOdd(num) {
    return num % 2 === 0;
}
console.log(evenOrOdd(20));
console.log(evenOrOdd(21));