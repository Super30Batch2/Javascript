// simple method
const obj = {
    name : 'codefirst',
    mobileNum : 98443214,
    isValid : true,
}
console.log("simple object", obj);

// using New keyword
const test = new Object();
test.name = 'codefirst';
test.mobileNm = 54894744;
console.log('Using new keyword',test);

// using Object.Assign
let per1 =  { fname:'Alex' };
let per2 = { lname: 'Simi'};
let person = Object.assign(per1, per2);
console.log('Object.assign',person);

// onject.creat

// const creat = Object.create(null);
// creat.name = 'virat';
// create.runs = 100;

// console.log(creat);

const me = Object.create({});
me.name = "Matthew";
me.isHuman = true;

console.log('Object.create: ',me);

const obj100 = {
  prop: "value",
  foo: "bar"
};

Object.freeze(obj100);
obj100.foo = '12235';
console.log(obj100);