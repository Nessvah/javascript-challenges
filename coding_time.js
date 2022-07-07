"use strict";

/* Musketeers
Write a program that:
Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
 */
let musketeers = ["Athos", "Porthos", "Aramis"];

//Shows each array element using a for loop.
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

//Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan");
console.log(musketeers);

//Shows each array element using the forEach() method.
musketeers.forEach((element) => console.log(element));

//Remove poor Aramis.

musketeers.splice(2, 1); // At index 2 remove 1 element
console.log(musketeers);

//Shows each array element using a for-of loop.
for (const musketeer of musketeers) {
  //console.log(musketeer);
}

/* Sum of values
Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
*/
const values = [3, 11, 7, 2, 9, 10];
let sum = 0;

values.forEach((element) => (sum += element));
console.log(sum);

/* Array maximum
Write a program that creates the following array, then calculates and shows the array's maximum value.
*/
const values2 = [81, 52, 22, 3, 9];
let bigger = 0;

for (let i = 0; i < values2.length; i++) {
  if (values2[i] > bigger) {
    bigger = values2[i];
  }
}
console.log(bigger);

/*List of words
Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop". */

let words, finalWords;
let arrOfWords = [];

do {
  words = prompt("Type some words: ");
  finalWords = words.toLowerCase();
  arrOfWords.push(finalWords); // Place the entered words in the array
} while (finalWords !== "stop");

arrOfWords.pop(); // removes the last word which is 'stop'

for (let name of arrOfWords) {
  console.log(name); // shows the other words
}
