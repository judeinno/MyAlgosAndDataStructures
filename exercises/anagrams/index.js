// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  const aCharMapKeys = Object.keys(aCharMap).length
  const bCharMapKeys = Object.keys(bCharMap).length
  if (aCharMapKeys !== bCharMapKeys) {
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {}
  const cleanedStr = str.replace(/[^\w]/g, "").toLowerCase();
  for (let char of cleanedStr) {
    charMap[char] = char[char] + 1 || 1
  }
  return charMap
}

module.exports = anagrams;
