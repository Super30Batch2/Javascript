//1 simple obj
// const obj = {
//   name: "Virat",
//   Runs: 220,
//   running: function () {
//     console.log("When 100 Complete");
//   },
// };
// const obj1 = obj.running();
// console.log(obj1);

////////////////////**********************//////////////
//2 Using New Keyword
const newky = new Object();
newky.name = "Rohit";
newky.runs = 211;
newky.isCaptain = false;

console.log(newky);
console.log(newky["name"]);

///////////////***************************////////////
//3 using constructor Function
function User(name) {
  this.name = name;
}

const User1 = new User("Ashitosh");

console.log(User1);

///////////////***********************///////////////
//Using ES6 classes
class User2 {
  constructor(name) {
    this.name = name;
  }
}

const name = new User2("Ashitosh");
console.log(name);

////////////////////////////////////////////////////////////////////////////
//object methods

//object.keys
const obj = {
  id: 1,
  fName: "ashitosh",
  lName: "Patil",
};

console.log(Object.keys(obj));

//obj vallues

const obj1 = {
  id: 1,
  fName: "shivraj",
  lName: "Jadhav",
};

console.log(Object.values(obj1));

//OBJECT.ASSIGN
const Obj2 = {
  id: 2,
  fName: "Sandip",
};

console.log(Object.assign(obj1, Obj2, obj));
console.log(obj1);

//OBJECT.ENTRIES

console.log(Object.entries(obj1));
