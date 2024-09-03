function countA(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      count++;
    }
  }
  return count;
}

let result = countA("Am, A JavaScript is an amazing language");
console.log("Total 'a' count:", result);
