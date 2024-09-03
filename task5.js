function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

let result = capitalizeFirstLetter("hello world! this is javascript.");
console.log(result); // Output will be "Hello World! This Is Javascript."
