function studentMsg(totalScores, studentScore) {
  const getAverage = totalScores.reduce((x, y) => x + y) / totalScores.length;
  studentScore = getGrade();
  if (studentScore === "F") {
    return `Class average: ${getAverage}. Your grade: ${studentScore}. You failed the course.`;
  } else {
    return `Class average: ${getAverage}. Your grade: ${studentScore}. You passed the course.`;
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
/* Javascript Variables Exercise
Given the existing code below, can you write some code so that their values are switched around?

var a = "3";
var b = "8";
So that the variable a holds the value "8".

And the variable b holds the value "3".

When the code is run, it should output:

a is 8

b is 3

Do NOT change any of the existing code.

You are NOT allowed to type any numbers.

You should NOT redeclare the variables a and b.

Hint: Use this code playground to run your code and see if it matches your expectations.

Hint: The solution is just 3 lines of code.
*/
function test() {
  var a = "3";
  var b = "8";

  /***********Do not change the code above 👆*******/
  //Write your code on lines 7 - 9:
  var c = a;
  var a = b;
  var b = c;

  /***********Do not change the code below 👇*******/

  console.log("a is " + a);
  console.log("b is " + b);
}
