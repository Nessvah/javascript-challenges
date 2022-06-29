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
