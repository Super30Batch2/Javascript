// simple method 
const obj={
    name:'yogesh',
    mobile:996658899,
    valid:true,

}

console.log(obj);

let person2 = {
  name: "Yogesh",
  age: 23,
  city: "Pune"
};

console.log(person2);



//1.
// using New keyword
const test = new Object();
test.name = 'codefirst';
test.mobileNm = 54894744;
console.log('Using new keyword',test);


//2.
const person1 = new Object();
person1.name = "Yogesh";
person1.age = 24;
person1.city = "Pune";

console.log(person1);//{ name: 'Yogesh', age: 24, city: 'Pune' }
console.log(person1.name);//Yogesh
console.log(person1["city"]);//Pune

let car=new Object();
car.name="Honda";
car.model="jazz";
car.mfyear=2025;
console.log(car);//{ name: 'Honda', model: 'jazz', mfyear: 2025 }
console.log(car.model);//jazz
console.log(car["mfyear"]);//2025






// using Object.Assign

let per1 =  { fname:'Alex' };
let per2 = { lname: 'Simi'};
let person = Object.assign(per1, per2);
console.log('Object.assign',person);


//2.
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let result = Object.assign( obj1, obj2);

console.log(result);

//3. object.create

let employee = {
  company: "TCS"
};

let emp1 = Object.create(employee);
emp1.name = "Rohit";

console.log(emp1.company);


