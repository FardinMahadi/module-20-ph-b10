let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let i = 0; i < Object.keys(myObject).length; i++) {
  console.log(
    "Key:",
    Object.keys(myObject)[i],
    "|",
    "type:",
    typeof Object.values(myObject)[i]
  );
}
