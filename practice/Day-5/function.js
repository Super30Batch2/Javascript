var str = "JavaScript String";


// search
const search = str.search("String");
console.log(search);


// charAt.
const char = str.charAt(2);
console.log(char);

// concatination
const a = str +' '+ 'Methods of String';
console.log(a);

// indexof
const inx = str.indexOf("Script");
console.log(inx);

// replace
const rep = str.replace('String','language');
console.log(rep);


// slice (starting index, end index-1)//
const slice = str.slice(4,8);
console.log(slice);

// split
const split = str.split('');
console.log(split);

// substring
const sub = str.substring(3,7);
console.log(sub);

// UpperCase
const upper = str.toUpperCase();
console.log(upper);

// LOwerCase
const lower = str.toLowerCase();
console.log(lower);