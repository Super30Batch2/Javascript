


var test1="java";
var test2="scripting language mumbai pune";


// 1. typeof
console.log(typeof(test1));
console.log(typeof(test2));

// 2.valueOf
console.log(test1.valueOf());
console.log(test2.valueOf());

// 3.charAt
var test2 = test1.charAt(4);
console.log(test2);

var test3 = test2.charAt(4);
console.log(test3);

// will return 5 th position character from above string.
// will return empty if length and index not match 

// 4. length
console.log(test1.length);
console.log(test2.length);
// will retunr length of the string.

let a=[1,2,3,4,5]

console.log(a.length);



// 5. charCodeAt
test3 = test1.charCodeAt(13);
console.log(test3);

test4 = test2.charCodeAt(13);
console.log(test4);

let b="pune";
let testb=b.charCodeAt(3);
console.log(testb);
// will return the ASCII value of that charter

// 6.concatination
var test4 = test2 + " Software Company";
console.log(test4);

var test37= test2 + "Solution Architect";
console.log(test37);
var test38 ="Solution Architect"+" "+ test1 ;
console.log(test38);






// 7.indexOf

let test32=["pune","karad","mumbai","kolhapur"]

var test5 = test32.indexOf('mumbai');
console.log(test5);

var test6=test32.indexOf("karad");
console.log(test6);

const text45=test32.indexOf("kolhapur");
console.log(text45);
const text44=test32.indexOf("pune");
console.log(text44);



// will return start index of char or string 
//if its available in the string otherwise this will return -1

// 8. replace
var test88=("java application")
var test77 = test88.replace('java','oracle');

console.log(test77);
// will replace the char or word if found inside series of string 
//otherwise it will return the original string.

// 9. search
console.log('xxxxxxxx');
console.log(test1);
var test2=('mumbai pune satara');
var test71 = test2.search("pune");
console.log(test71);

var test75=test2.search("mumbai")
console.log(test75);

// will return strart index of search string 
//if found in original string otherwise it will retun -1.

// 10.slice
// slice(start index, end index-1)
var test8 =test1.slice(3,6);
console.log(test8);

var test29=test2.slice(2,9);
console.log(test29);

var test29=test2.slice(7,13);
console.log(test29);

// will return new string depending upon start index and end index minus 1

// 11. spilt
var test9 = test1.split('');
console.log(test9);

var test47=test2.split(' ');
console.log(test47);
// will return new array depending on provided condition 
//and that condition will be removed from  new array.

// 12. substring
var test10 = test2.substring(3,8);
console.log(test10);
// sybstr(start index, legnth)

// 13.uppercase


var test11 = test1.toLocaleUpperCase();
console.log(test11);


var test12 = test1.toLowerCase();
console.log(test12);


setTimeout(function() {
  console.log("Hello World");
  console.log("Hello World");
}, 5000);