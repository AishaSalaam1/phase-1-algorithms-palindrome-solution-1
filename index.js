function isPalindrome(word) {
  // Write your algorithm here
  let n = word.length;
  for (let i = 0; i < n / 2; i++) {
      if (word.charAt(i) !== word.charAt(n - 1 - i)) {
          return false;
      }
  }
  return true;
}

/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true

*/

/*
  Add written explanation of your solution here
  
  `write a function that returns true or false and  also
   The index of the first character is 0,
    the second character is 1, and so on.`
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
