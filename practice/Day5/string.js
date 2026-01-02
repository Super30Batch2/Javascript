var test1 = ("I am data analyst and data science enthusiast");

//1) typeof :
console.log(typeof(test1));

//2) valueof : It Is Print Value
console.log(test1.valueOf());

//3) charAt : will rwturn 5th position character from above string.
//will return empty if length of the string and index not match
var test2 = test1.charAt(5);
console.log(test2);

//4) length : It will return length of string.
console.log(test1.length);

//5) charCodeAt : It will return the ascii value of that character.
test2 = test1.charCodeAt(10);
console.log(test2);

//6) concatenation : 
var test2 = (test1 + "Mern stack developer");
console.log(test2);

//7) Indexof : 
// It will return start index of char or string
// if its available in the string otherwise this will return -1
var test2 = test1.indexOf("test1");
console.log(test2);

//8) replace :
// It will replace the char or word if found inside series of string
//otherwise it will return the original string.
var test2 = test1.replace('web developer','mern stack developer');
console.log(test2);

//9) search :
//It will return start index of search string
//If found in original string otherwise
console.log('8788xxxx');
console.log(test1);
var test2 = test1.search('web');
console.log(test2);

//10) slice :
//slice(start index, end index-1)
//It will return new string depending upon start index and end index minus 1 
var test2 = test1.slice(3,5);
console.log(test1);

//11) split:
//It will return new array depending on provided condition.
//and that condition will be removed from new array.
var test2 = test1.split('');
console.log(test2);

//12) substring: sybstr(start index, length)
var test2 = test1.substring(3,5);
console.log(test1);

//13) uppercase:
var test11 = test1.toLocaleUpperCase();
console.log(test11);

var test12 = test1.substring(3,9).toLowerCase();
console.log(test12);

