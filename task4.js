function replaceXwithY(str) {
  return str.replace(/x/g, "y").replace(/X/g, "Y");
}

let result = replaceXwithY("Example Xylophone and x-ray");
console.log(result);
// Output will be "Eyample Yylophone and y-ray"
