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
