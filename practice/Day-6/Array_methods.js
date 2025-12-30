//1.push //

//push() – Add element at end
//// Push is going to add new element at the end of an array 
//and this will return length of the new array.

let arr=[1,2,3,4];  
arr.push(8);
console.log(arr);

//Simple To-Do List
//When a user types a task and clicks "Add," 
// the application pushes that new string into a task list array

let task=['wake up','Go to Gym'];
task.push('Drink Coffee');
console.log(task);

//E-commerce Shopping Cart
//As a customer shops, each selected product is pushed into their active cart.

let cart=[];
cart.push({id:1 ,company_name:'Honda',Model:'city'},{id:2 ,company_name:'Suzuki',Model:'Ertiga'});
cart.push({id:3 ,company_name:'Mahindra',Model:'Bolero'});
console.log(cart);

//chat messages

let messagefeed=['Hi!','How are you ?'];
messagefeed.push('I am great');
console.log(messagefeed);

// Merging Multiple Items (Sports Roster)
//You can push multiple elements at once by separating them with commas

const team=['Alice','Dive'];
team.push('david','john','Srew');
console.log(team);

/// 2. pop //

// pop is will remove last element of array and will return that last/removed element.

let fruit_cart=['Apple','watermelon','banana','orange'];

console.log(fruit_cart); //[ 'Apple', 'watermelon', 'banana', 'orange' ]
fruit_cart.pop('orange');
console.log(fruit_cart); //[ 'Apple', 'watermelon', 'banana' ]

let car_rent=['Scorpio','Jazz','Amaze'];
console.log(car_rent);//[ 'Scorpio', 'Jazz', 'Amaze' ]
car_rent.pop('Amaze');
console.log(car_rent);//[ 'Scorpio', 'Jazz' ]


// 3.Unshift
//// Unshift is going to add new element at the start of an array 
//and this will return  length of the new array.

let test4=fruit_cart.unshift('Grapes');

console.log(test4);  //4  
console.log(fruit_cart);//[ 'Grapes', 'Apple', 'watermelon', 'banana' ]

//
console.log(car_rent); //[ 'Scorpio', 'Jazz' ]
let test5=car_rent.unshift(); //adds new element at start of array
console.log(car_rent); // [ 'Creta', 'Scorpio', 'Jazz' ]

//4.shift
// shift is will remove first element of array and will return that first/removed element.
console.log(fruit_cart);  //[ 'Grapes', 'Apple', 'watermelon', 'banana' ]
let test6=fruit_cart.shift('Grapes'); //it will remove element from array
console.log(test6); //Grapes
console.log(fruit_cart);  //[ 'Apple', 'watermelon', 'banana' ]

console.log(car_rent); //[ 'Scorpio', 'Jazz' ]
let test7=car_rent.shift(); //it will first element from array
console.log(test7); //Scorpio
console.log(car_rent); //[ 'Jazz' ]

//.5 slice 
//// slice is going to return new array of given start index and end index
let test8=fruit_cart.slice(0,2);
console.log(test8);
console.log(fruit_cart);  //[ 'Apple', 'watermelon', 'banana' ]
console.log(test8); //[ 'Apple', 'watermelon' ]

////////
console.log(fruit_cart);
fruit_cart.push('orange','Grapes','Mango');
console.log(fruit_cart);

console.log(car_rent);
car_rent.unshift('Scorpio','City','Amaze','Ciaz');
console.log(car_rent);
////
console.log(fruit_cart);

console.log(car_rent);
////

// 6. splice

// splice(start index, how many to remove, new elements to be added);
// splice is used to add or remove elements from an array. 
// this method will return removed elements 
//If no new added elements are there then also this will perform operation

/* console.log(fruit_cart);
var test9=fruit_cart.splice(1,2,'chery');
var test9=fruit_cart.splice(1,2);
console.log(test9); */
console.log(fruit_cart);
var test9 = fruit_cart.splice(1,2, 'fruit77', 'fruit99');
 //var test9 = fruit_cart.splice(0,2);
//var test9 = fruit_cart.splice(2);
console.log(test9);
console.log(fruit_cart);

// 7.join
// console.log(test1);
//var test9 = test1.join();
// console.log(test9);
// console.log(test1);
// join ==> will convert array to string
// split ==> will convert string to array

var test10=fruit_cart.join(" ");
console.log(test10);
//console.log(fruit_cart);
//console.log(typeof NaN ==='number');
//console.log(typeof NaN);
//console.log(typeof number);



// 8. concat
// concat will combine two arrays and return new array with all added elements.

//var test8 = ['Chemali', 'Komal', 'Kapil'];
//var test10 = test1.concat(test8);
// console.log(test10);
// console.log(test1);

var test12=fruit_cart.concat(car_rent);
console.log(test12);
/* [
  'Apple',   'fruit77',
  'fruit99', 'orange',
  'Grapes',  'Mango',
  'Scorpio', 'City',
  'Amaze',   'Ciaz',
  'Jazz'
] */

//9.rverse
console.log(fruit_cart); //[ 'Apple', 'fruit77', 'fruit99', 'orange', 'Grapes', 'Mango' ]
var test20=fruit_cart.reverse();
console.log(test20);//[ 'Mango', 'Grapes', 'orange', 'fruit99', 'fruit77', 'Apple' ]


//

// 10. combination of split and reverse
var test22 = "ClariTech Solutions, Pune";
var test23 = test22.split('').reverse().join('');
console.log('test23==>',test23);




// 11. toString
//fruit_cart.reverse();
 console.log(fruit_cart);
var test24 = fruit_cart.toString();
console.log(test24);

// 12. map
// map will perform operation on each element of array and return new array.
var test26 = [1,2,3,4,5];
var test27 = test26.map(n => n + 2);
console.log(test27);

var test28 = test26.map(n => n + 5);
console.log(test28);

// 13. filter
// filter will perform operation on all elements and return elements who can satisfy the condition.
const arr1 = [{id:2},{id:3},{id:3}];
//console.log(test15);
var test17 = arr1.filter(item => item.id === 3 );
console.log(test17);  //[ { id: 3 }, { id: 3 } ]


console.log(cart);

const arr2=[{ id: 1, company_name: 'Honda', Model: 'city' },
  { id: 2, company_name: 'Suzuki', Model: 'Ertiga' },
  { id: 3, company_name: 'Mahindra', Model: 'Bolero' }]
  var test55=arr2.filter(item =>item.id===3)
  console.log(test55);//[ { id: 3, company_name: 'Mahindra', Model: 'Bolero' } ]


// 14. Reduce

const num = [2,4,5,3];
 const test18 = num.reduce(function(res, item){
    return res + item
}, 0);
console.log(test18); //14

const num1 = [2,4];
 const test181 = num1.reduce(function(res, item){
    return res + item
}, 0);
console.log(test181);//6
/* var test62=[1,2,3,4,5];
var test60 = test62.reduce(function(res, item){
    return res + item
}, 0);
console.log(test60);

reduce(function(x,y){},0); */


// find
const arr3 = [{id:2},{id:3},{id:5},{id:3}];
var test77 = arr3.find(item => item.id === 3 );
console.log(test77);

//

const str = "mera bharat mahan";
 const spl = str.split(' ');//
 console.log(spl);
 /* [
  'm', 'e', 'r', 'a', ' ',
  'b', 'h', 'a', 'r', 'a',
  't', ' ', 'm', 'a', 'h',
  'a', 'n'
]
 */

const rev = spl.reverse();
 console.log(rev);
//
 // map.
const num3 = [2,4,8,2,7,6,7];
const map = num3.map((x)=>x*5);
console.log(map);















 










