var samplarray = ['Nitin', 'aniket','rohan','vishal','mayur','akshata'];
console.log(samplarray);
const arr100 = [1,5,3,6,4,8];
const arr = [
    {id:1, username:'xyz'},
    {id:2, username:'abc'},
    {id:3, username:'rsp'}
 ];

 console.log(samplarray[0]);
 console.log(typeof(samplarray[0]));
 console.log(typeof(samplarray));
 console.log(samplarray.length);

 //push: push value at the end.
 var test2 = samplarray.push('abhi');
 console.log(samplarray);

 //pop: used for deleting last element
 //pop will remove last element and return last element ehich is removed from list
 var test3 = samplarray.pop();
 console.log(test3);

 //unshift
 var test2 = samplarray.unshift('vivek')
 console.log(samplarray);

// shift : remove from start
var test2 = samplarray.shift();
console.log(test2);
console.log(samplarray);

// slice: Extract without changing(start index, end index-1)
var test2 = samplarray.slice(2,7);
console.log(test2);
console.log(samplarray);

// splice(): add/remove : removes element from starting ,
// modifies original array
// returns removed elements
var test2 = samplarray.splice(2)
console.log(samplarray);

// join : array to string // split convert string to array
var test2 = samplarray.join();
console.log(test2);

// concat:
var test8 = ['shivraj','rohan','aniket','vishal'];
var test10 = samplarray.concat(test8);


// 9.reverse
// console.log(test1);
var test11 = test1.reverse();

// console.log(test11);

// 10. combination of split and reverse
var test12 = "ClariTech Solutions, Pune";
var test13 = test12.split('').reverse().join('');
console.log('test13==>',test13);

// 11. toString
samplarray.reverse();
// console.log(test1);
var test14 = test1.toString();
// console.log(test14);

// 12.map
var test15 = [1,2,3,4,5];
var test16 = test15.map(item => item + 5);
console.log(test16);
// map will perform operation on each element of array and return new array.

// 13. filter
const arr = [{id:2},{id:3},{id:3}];
// console.log(test15);
var test17 = arr.filter(item => item.id === 3 );
// console.log(test17);
// filter will perform operation on all elements and return elements who can satisfy the condition.

// find
const arr2 = [{id:2},{id:3},{id:5}];
var test17 = arr.find(item => item.id === 3 );

// 14. Reduce
var test18 = test15.reduce(function(res, item){
    return res + item
}, 0);
console.log(test18);

reduce(function(x,y){},0);

