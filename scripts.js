///CODE WARS CHALLENGES
///////////////////////////////
///FIRST CHALLENGE

/* Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here

  let twiceSonYearsOld = sonYearsOld * 2;

  return dadYearsOld > twiceSonYearsOld
    ? dadYearsOld - twiceSonYearsOld
    : twiceSonYearsOld - dadYearsOld;
}

///SECOND CHALLENGE

/* Complete the function so that it finds the average of the three scores passed to it
and returns the letter value associated with that grade. */

function getGrade(s1, s2, s3) {
  // Find the average
  let averageOfGrades = (s1 + s2 + s3) / 3;

  if (averageOfGrades >= 0 && averageOfGrades < 60) {
    return "F";
  } else if (averageOfGrades >= 60 && averageOfGrades < 70) {
    return "D";
  } else if (averageOfGrades >= 70 && averageOfGrades < 80) {
    return "C";
  } else if (averageOfGrades >= 80 && averageOfGrades < 90) {
    return "B";
  } else {
    return "A";
  }
}

// Better way
/* function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
} */

////////////////////////////////////////////////////////
/// Third challenge
/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    // setup loop to go through array of given length
    if (arr[i] > 0) {
      // if arr[i] is greater than zero
      total += arr[i]; // add arr[i] to total
    }
  }
  return total; // return total
}

////////////////////////////////////////////////////////
/// Fourth challenge

/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest' */

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

/// SECOND OPTION
/* function greet (name, owner) {
  return `Hello ${name==owner?'boss':'guest'}`
} */

/////////////////////////////////////////////////////////
/// Fifth challenge

/* Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!" */

const rps = (p1, p2) => {
  if (p1 !== p2) {
    if (
      (p1 === "scissors" && p2 === "paper") ||
      (p1 === "paper" && p2 === "rock") ||
      (p1 === "rock" && p2 === "scissors")
    ) {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
  } else {
    return "Draw!";
  }
};

////////////////////////////////////////////////////////////
/// 4th CHALLENGE

/* Write a function named setAlarm which receives two parameters. The first parameter,
employed, is true whenever you are employed and the second parameter, vacation is true
whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these
are the circumstances under which you need to set an alarm). It should return false otherwise. */

function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : false;
}

/////////////////////////////////////////////////////////////////
/// 5TH CHALLENGE

/* Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
 */
let arr = [];

function firstMultiples(num1, num2) {
  for (let i = 1; i <= num2; i++) {
    let multiple = num1 * i;
    arr.push(multiple);
  }

  return arr;
}

console.log(firstMultiples(3, 5));

// Better writen code

// function countBy(x, n) {
//     var z = [];
//     for (i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }
