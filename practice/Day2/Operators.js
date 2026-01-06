// // 1. Arithmetic Operators:
// // 	A)	Addition
// // 	B)	Subtraction
// // 	C)	multiplication
// // 	D)	Division
// // 	E)	Modulus %
// // 	F)	Increment
// // 	G)	Decrement

// // Method-1
var a = 100;
var b = 200;

var add = a + b;
console.log(add);

var sub = a - b;
console.log(sub);

var multiplication = a * b;
console.log(multiplication);

var division = a/b;
console.log(division); 

var Modulus = a%b;
console.log(Modulus);

// Method-2
console.log(add, sub, multiplication);

// pre increment and post increment
// Pre Increment
var inc = ++a;
console.log("increment = ",inc);

var dec = --b;
console.log("Decrement = ",dec);

// post increment
var inc1 = a++;
var dec1 = b--;

console.log(inc1, dec1);
console.log(!true);

const x = "test";
console.log(typeof(x));

const isData = (3 > 4) ? true : false

// Assignment Operators:

var a = 10;
var b = 20;

console.log(a);
a = b;

a += b;
console.log(a);

//.................. // Comparison operators //---------------------------
		// Equal to 
		// not equal to 
		// double equal to 
		// triple equal to 
		// less than
		// greater than 
		// less than or equal to 
		// greater than or equal to.
		
		// * in == only value will be compared and in === value as well as data type of that operands will be compared.	
// 1) Equal To : =		
var a = 20;
var b = "20";

// a) Double Equal To == : It only see condition ,"5" is converted to number 5, then compared
Double = a==b;
console.log(Double);

// Exampl: 5 == "5"; // true


// b)Triple Equal To ===  :It is strictly look for data type as well as condition, No type conversion : Number ≠ String
triple = a === b;
console.log(triple);

// Example: 5 === "5"; // false

// 2) Not Equal to : !=
res = a != b;
console.log(res);

// 3) greater than : >
mark = 40;
if (mark > 35);
console.log("pass");

// 4) smaller than : <
if (mark < 35) ;
console.log("fail");

	// 3. Logical Operaators:
	// 	Logical and AND
	// 	logical OR
	// 	logical XOR
	// 	logical NOT
// a) And operator 
let email = "admin";
let password = "12345";

if (email && password)
{
   console.log("true");
}
else{
    console.log(false);
}




