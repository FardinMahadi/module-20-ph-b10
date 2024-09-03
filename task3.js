function containsAllVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();

  for (let vowel of vowels) {
    if (str.includes(vowel)) {
      return true;
    } else {
      return false;
    }
  }
}

let result = containsAllVowels("Education");
console.log(result); // Output will be true
