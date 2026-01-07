var str = "India is my country";

// charAt.
const char = str.charAt(4);
console.log(char);

// concatination
const a = str +' '+ 'I love it';
console.log(a);

// indexof
const inx = str.indexOf("my12");
console.log(inx);

// replace
const rep = str.replace('my','our');
console.log(rep);

// search
const search = str.search("country10");
console.log(search);

// slice (starting index, end index-1)
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