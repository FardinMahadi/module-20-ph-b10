let country = "Bangladesh";

// reverse text
let sentence = "I am learning Web Dev.";
let reverse = "";
for (let letter of sentence) {
  //   console.log(letter);
  reverse = letter + reverse;
}
console.log(reverse);

// reverse using for loop
let rev = "";
for (let i = 0; i < sentence.length; i++) {
  //   console.log(i);
  //   console.log(sentence[i]);

  let letter = sentence[i];
  rev = letter + rev;
}
console.log(rev);

// shortcut
let reversed = sentence.split("").reverse().join("");
console.log(reversed);
