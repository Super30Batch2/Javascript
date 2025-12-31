// simple method

const simple = {
    name : 'shiv',
    age : 7,
    school : 'xyz',
}
console.log("simple Object :",simple);

// using New keyword
const keyword = new Object();
keyword.name='ram';
keyword.age=1;
console.log("using new keyword :",keyword);

// using Object.Assign
var us = {name:'raghav'};
var us1 = {age:1};
var assign = Object.assign(us,us1);
console.log("Object assign method :",assign);

// using create object
const creat = Object.create(null);
creat.name='savi';
creat.subject='xyz';
console.log("using create object :",creat);


// simple object 
const simple1 = {
    name: 'vinu',
    school:'abc',
    brand:'xyz',
}
console.log(simple1);

// using new keyword 
var key = new Object();
key.name = 'nitin';
key.value='true';
console.log(key);

// assign object 
var as = {name:'xyz'};
var as1 = {value:true};
var assign1 = Object.assign(as,as1);
console.log(assign1);

// using create object 

const con = Object.create({});
con.name='ghf';
con.age=10;
console.log(con);