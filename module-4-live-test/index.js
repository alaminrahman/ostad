function countVowels(str) {
  // Convert the string to lowercase for case-insensitive matching
  const lowerCaseStr = str.toLowerCase();

  // Regular expression to match vowels
  const vowelRegex = /[aeiou]/g;

  // Use match() to find all occurrences of vowels in the string
  const vowels = lowerCaseStr.match(vowelRegex);

  // Return the number of vowels found
  return vowels ? vowels.length : 0;
}

console.log(countVowels("Alamin"));

