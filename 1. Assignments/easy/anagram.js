/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // to check if both strings have same length if not then return false

  if (str1.length != str2.length) {
    return false;
  }

  // convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // create an object to store characters and their count
  const charCount = {};

  // traverse through first string
  for (let i = 0; i < str1.length; i++) {
    if (!charCount[str1[i]]) {
      charCount[str1[i]] = 1;
    } else {
      charCount[str1[i]]++;
    }
  }

  // traverse through first string
  for (let i = 0; i < str2.length; i++) {
    // if character is not in object then return false
    if (!charCount[str2[i]]) {
      return false;
    } else {
      // if character is in object then decrement its count
      charCount[str2[i]]--;
    }
  }

  // traverse through object
  for (let key in charCount) {
    // if any character count is not 0 then return false
    if (charCount[key] !== 0) {
      return false;
    }

    return true;
  }

  return true;
}

module.exports = isAnagram;
