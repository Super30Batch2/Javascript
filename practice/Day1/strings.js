/* let str= 'India is great';

let str2 = "In the world"

let index = str.concat(str2);
// console.log(str.length)
// console.log(str +' '+ str2);
console.log(index);

const out = str.slice(0,5);
console.log(out);

const arr = str.split("");
// console.log(arr);

// const sub = str.substring(2,6);
// console.log(sub);
console.log(str.toUpperCase()); */

let str= 'Mumbaicity';

let str2 = "In the world";

let index = str.concat(str2);//concatination 

console.log(index);//concatination
console.log(str.length);//returns the length string
console.log(str+'    '+str2);//space between the two strings

const out = str.slice(0,5);//slice starts from < 0 index to end index of string > 
console.log(out);

const arr = str.split("");//string can be converted to an array with the split() method
 console.log(arr);

const sub = str.substring(2,6);//The difference is that start and end values less than 0 are treated as 0 in substring(). it is similar  slice()
console.log(sub);





