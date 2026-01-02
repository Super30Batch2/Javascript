// conditional statements:  shift+alt+A
/* 
If 
If else
nested if else
switch
while
do... while
for 
for ... in  */

// Loop control Statements: 
/*1) break
2)Continue */

/* 1) if:
 if( condition){
	 block of code
	 } */

/* ✅ console.log() inside a block
👉 Used when you want to print something only if a condition is true or during a loop. */
/* ✅ console.log() outside a block
👉 Used when you want to print something every time, no matter what. */

/* let a = 20;

if (a < 25) {
    console.log(a);
} */

/*2) if-else:
if(condition){
		block of code 
		}
		else{
		block of code
		}
 */
/* Write a program to check whether a number is positive, negative, or zero.*/

/* let num = -5;

if (num > 0){
    console.log("Positive Number");     // To print
}
else if(num < 0){
    console.log("Negative Number");
}else{
    console.log('Please Enter the correct number')
} */

//  Example:Check whether a given number is even or odd.

/* let age = Number(prompt("Enter Your Number:"));
console.log(age);   : It is method to take input from user but it is not supported by node*/

/* let number = 2;
if(number % 2 == 0 ){
    console.log("Entered number is Even");
}
else{
    console.log("Entered number is odd")
}
 */
// nested if:

/* if (condition1) {
    if (condition2) {
        // code
    } else {
        // code
    }
} else {
    // code
} */
// Ex:Login Validation:

let username = "admin";
let password = "12345";

if(username === "admin"){
    if(password === "12345"){
        console.log("Login Successful");
    }
    else{
        console.log("Wrong password");
    }
}
else{
    console.log("Invalid username"); 
}
// Example:Grade System:

/* let marks = 35;

if(marks > 45){
    if(marks > 70){
        console.log("distinction");
    }
    else{
        console.log("pass");
    }
}else{
    console.log("fail");
} */


/* 3)nested if else:
	if(condition){
		block of code 
		}
	else if(condition){
		block of code
		}
	else if (condition){
	block of code
	}
	...
	....
	....
	....
	else{
	block of code 
	} */
// Ex: Grade Calculator:

let marks = 95;

if (marks >= 90){
    console.log("Grade A");
}else if( marks >= 75){
    console.log("Grade B");
}
else if(marks >= 60){
    console.log("Grade C");
}
else{
    console.log("Fail");
}



/* 4) switch:
	switch(expression){
	
	case 0:
	statement;
	break;
	
	case 1:
	statement;
	break;
	
	case 2:
	statement;
	break;
	
	...
	....
	...
	
	default:
	statement;
	break;
	
	}
 */

let num = Number(prompt("Enter Your Number:"));






/* 5. While Loop :
Used to execute the condition for multiple block of code with increment or decrement.
	
	while(condition){
	block of code 
	// increment or decrement
	}
 */


/* 6. do .. while:
	do while will be execute at any cost for
     first time then depending on condition code will be executed. */


/* 7. for loop:

	for(initialization; condition; increment/decrement){
		block of code
	}      */


