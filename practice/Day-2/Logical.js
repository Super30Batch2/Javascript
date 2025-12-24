/* 3. Logical :
        Logical and AND
        logical OR
        logical XOR
        logical NOT */


//Logical and AND
let age = 16;
let id = true;
if (age > 18 && id) {
    console.log("Allowed");
}
else {
    console.log(" Not Allowed");
}


//logical OR
let age1 = false;
let id1 = true;
if (age1 || id1) {
    console.log("Allowed");
}
else {
    console.log(" Not Allowed");
}

//logical OR

let a = true;
let b = false;

let result = (a || b) && !(a && b);
console.log(result); // true

//logical NOT

let a1 = 22;
let b2 = 33;

let result3 = (a1 || b2) && !(a1 && b2);
console.log(result); // true

let test1=true;
let test2=false;
let test3=false;
/* Truth Table

| A | B | AND (&&) | OR (||) | XOR (OR) |
|---|---|-----------|-----------|-----------|
| true | true | true | true | false |
| true | false | false | true | true |
| false | true | false | true | true |
| false | false | false | false | false | */

console.log(test1 && test2);//false

console.log(test1 || test2);//true

console.log(!test2);//true

if(test1 || test2) {
    console.log('Hi, Welcome');
} else {
    console.log('Sorry your not eligible');
}
//Hi, Welcome

if(test3 || test2) {
    console.log('Hi, Welcome');
} else {
    console.log('Sorry your not eligible');
}

//Sorry your not eligible

//////

let email = true;
let password = false;

//if (email && password) 
    if (!email && password) 

{
  console.log("Login successful");
} else {
  console.log("Login failed");
}
