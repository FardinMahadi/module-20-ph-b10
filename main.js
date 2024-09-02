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

/////////////////////////////////
///////////// object ///////////
///////////////////////////////

const age = 21;
const school = "rifle square";
const isPassed = true;
let isDeveloper;
const subjects = ["bangla", "English", "Physics", "Math"];
console.log(isDeveloper);

const bottle = {
  brand: "apple",
  price: 45,
  color: "transparant",
  isClean: false,
};

// non-primitive
const subject = {
  name: "biology",
  teacher: "rasheda mam",
  examDate: "30 Feb",
  chapters: ["First", "second"],
  exams: {
    name: "final exam",
    marks: 100,
  },
};

const person = {
  name: "sodor uddin",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
  "fav places": ["bandorban", "saintmartin", "kuakata"],
};

console.log(person);
// dot notation
// dot symbol diye object er property er value access kora
console.log(person.profession);
const income = person.salary;
console.log(income);

// bracket notation
// third bracket diye access kore
console.log(person["age"]);
const boyos = person["age"];
console.log(boyos);

console.log(person["fav places"]);

// changing object value
console.log(person);
person.salary = 30000;
person["age"] = 26;
person["fav places"] = ["maldives", "bali", "pataya"];
console.log(person);

// keys in object
const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const college = {
  name: "dc",
  class: ["11", "12"],
  events: ["science fair", "bijoy dibos", "21 feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};
college.unique.result.merit = "top top top most";
console.log(college.unique.result.merit);

delete college.class;
console.log(college);
