// const reverseString = function (str) {
//   // Step 1: split() the string and place characters in an array
//   // let splitString = str.split("");
//   // Step 2: use reverse() to reverse the newly created array
//   // let reverseArray = splitString.reverse();
//   // Step 3: use join() to rejoin split characters
//   // let reJoined = reverseArray.join("");
//   // Step 4: return the reversed string
//   // return reJoined;
//   return str.split("").reverse().join("");
// };

function reverseString(str) {
  // Step 1. Create an empty string that will host the new created string
  // Step 2. Create the FOR loop
  /* The starting point of the loop will be (str.length - 1) which corresponds to the 
      last character of the string, "o"
      As long as i is greater than or equals 0, the loop will go on
      We decrement i after each iteration */
  // Step 3. Return the reversed string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

// // RECURSION METHOD
// function reverseString(str) {
//   if (str === "") {
//     return "";
//   } else return reverseString(str.substr(1)) + str.charAt(0);
// }
// Do not edit below this line
module.exports = reverseString;
