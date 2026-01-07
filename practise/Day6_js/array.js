var test1 = ['sandip','sagar','aniket','ram','prashant','vipul','vinu'];
const arr100 = [1,2,3,4,5]
const arr500 = [
    {id:1, username:'xyz'},
    {id:2, username:'abc'},
    {id:3, username:'qwe'}
]

// console.log(test1[0]);
// console.log(typeof(test1[0]));
// console.log(typeof(test1));
// console.log(test1.length);

//1.push
var test2 =test1.push('rahul');
//console.log(test2);
//console.log(test1);
//Push is going to add new element at the end of an array and this will return length of the new array.
 
//2.pop
var test3 = test1.pop();
//console.log(test3);
//pop is going to remove the last element and return the that last/removed element

//3.unshift
var test4 =test1.unshift("vivek");
//console.log(test4);
//unshift is add the new element in start of the array and return all length of new array.

//4.shift
var test5 =test1.shift();
//console.log(test5);
//shift is going to remove the start element of the array and return the start/removed element.

//5.slice
var test6 =test1.slice(2,7);
//console.log(test6);
//console.log(test1);
//slice(start index,end index -1)
//slice is going to return a new array of given start index to end index

//6.splice
// console.log(test1.splice(0,6, 'xyz','abc'));

//7.join
var test9 =test1.join();
//console.log(test9);
//join is convert array to string
//split
var text = 'ram krishn ganesh shree';
var test10 =text.split();
//console.log(test10);
//split is convert string to array

//8.concat
var test8 =["shiv","hari","pratik"];
var test11 =test1.concat(test8);
//console.log(test11); 
//concat is combine two array and return new array with all added elemnets 

//9.reverse
test11 = test1.reverse();
//console.log(test11);
//
//10.combination of split and reverse
// var text3 = "shiv is here to eating the foood";
// var text4 =text3.split('').reverse().join('');
// console.log("text ==>",text4);

//11.string
//console.log(test1);
test1.reverse();
test12 =test1.toString();
//console.log(test12);
//tostring is convert the value in string
//like numbers,array,boolean,object,etc

//12. map
var test13 = [1,2,3,4,5,6];
var test14 = test13.map(item => item + 5);
// console.log(test14);
//map is prform opration on each element and return new array  1

let users = [
    {name:"koustubh",marks:80},
    {name:"ram",marks:70}];
let marksonly = users.map(user=>user.marks);
// console.log(marksonly);
//map array method that change each element of an array and return new array  2
//orignal array is not modified>

//13.filter
let test15 =[
    {name:"ram",Age:20},
    {name:"shree",Age:17}
];
let test16 =test15.filter(test=>test.Age >=18);
// console.log(test16);

const arr =[{id:1},{id:2},{id:3}];
var test17 =arr.filter(item=>item.id === 3);
// console.log(test17);
//filter will perform opration on all element and return element who can satify the condion
//[]empty array return if not match

// 14.find
const arr2 =[{id:56},{id:7},{id:45}];
var test18 =arr2.find(item=>item.id === 45 );
//console.log(test18);
//find will perform operation when condition is match then exit 
//undefind return if not match

// 15.reduce
const user = { name: "Anjali", address: { city: "Delhi" } };
const newUser = { ...user };
newUser.address.city = "Mumbai";
console.log(user.address.city, newUser.address.city);

const arr4 = [1, 2, 3];
const result = arr4.filter(num => num * 2);
console.log(result);