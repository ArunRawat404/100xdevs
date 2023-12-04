/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  // remove all spaces
  str = str.replace(/ /g, '');

  let start = 0;
  end = str.length - 1;

  specialChar = ["'", "!", ",", ".", "?"];

  while (start < end) {
    if (specialChar.includes(str[start])) {
      start++;
    }
    if (specialChar.includes(str[end])) {
      end--;
    }

    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

module.exports = isPalindrome;
