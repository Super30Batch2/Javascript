"use strict";

//conditional statements are used for the decision making

//if
//1
let num = 10;

if (num > 0) {
  console.log("Positive number");
}
//op : Positive no

//2
let age = 19;

if (age >= 18) {
  console.log("Eligible to vote");
}

//Eligible to vote

//3
let n = 8;

if (n % 2 === 0) {
  console.log("Even number");
}

//4
let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Logged In Succesfully");
}

//5
let amount = 25000;

if (amount > 2000) {
  console.log("Discount Applied");
}

//6 check pass length

let password = "Test@123";
if (password.length >= 8) {
  console.log("Strong Pass");
}

//7
let email = "ashitoshpatil27@gmail.com";

if (email.includes("@")) {
  console.log("Valid Email");
}

//8
let stock = 5;

if (stock > 0) {
  console.log("Item Available");
}

//9

let role = "Admin";

if (role === "Admin") {
  console.log("Admin access granted");
}

//10
let hour = 9;
if (hour < 12) {
  console.log("Good Morning");
}

//11
let items = ["book", "pen"];

if (items.length > 0) {
  console.log("Items Present");
}

//2nd comnditional statement is if_else

let no = 7;

if (no % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

//2
let marks = 35;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//3
const logIn = false;

if (logIn) {
  console.log("LogIn Succcessfully");
} else {
  console.log("LogIn Failed");
}

//4
const agee = 19;

if (agee > 20) {
  console.log("Age is greater then 20");
} else {
  console.log("Age is less than 20");
}

//5
const totalAmount = 1200;

if (totalAmount >= 1200) {
  console.log("You are Eligible for the discount");
} else {
  console.log("You are not eligible for the discount");
}

//6
const isOnline = false;
if (isOnline) {
  console.log("User is Online");
} else {
  console.log("User is Offline");
}

//7
const stocks = 12;
if (stocks > 12) {
  console.log("Stock is available");
} else {
  console.log("Stock is not available");
}

//8
const username = "";

if (username) {
  console.log("userName is entered");
} else {
  console.log("userName is not entered");
}

//9
const tempreture = 32;

if (tempreture > 32) {
  console.log("Tempreture is grater then 32");
} else {
  console.log("Tempreature is less than 32");
}

//10
const paymentStaus = false;

if (paymentStaus) {
  console.log("Payment Successful");
} else {
  console.log("Payment Fails");
}

//nested if else

//1
let idLoggedIn = true;
let roole = "admin";

if (isLoggedIn) {
  if (role === "admin") {
    console.log("Welcome Admin");
  } else {
    console.log("Welcome User");
  }
} else {
  console.log("Please LogIn");
}

//2
let agge = 30;
let isCitizen = true;

if (agge >= 18) {
  if (isCitizen) {
    console.log("Eligible to vote");
  } else {
    console.log("Citizen required");
  }
} else {
  console.log("Underrange");
}

//3
let markss = 82;

if (markss >= 40) {
  if (marks >= 75) {
    console.log("Distinction");
  } else {
    console.log("Pass");
  }
} else {
  console.log("Fail");
}

//4
let cartAmount = 1500;
let hasCoupon = true;

if (cartAmount > 1000) {
  if (hasCoupon) {
    console.log("Extra discount applied");
  } else {
    console.log("Standard discount applied");
  }
} else {
  console.log("no discount");
}

//5
let isOnlinee = true;
let serverUp = false;

if (isOnlinee) {
  if (serverUp) {
    console.log("Service available");
  } else {
    console.log("Server down");
  }
} else {
  console.log("No internet connection");
}

//6
let pass = "Test@123#";

if (pass) {
  if (pass.length >= 8 && pass.includes("#@")) {
    console.log("Strong Pass");
  } else {
    console.log("Weak Pass");
  }
} else {
  console.log("Please enter the pass");
}

//7
let stoock = 10;
let isPremiumUser = false;

if (stoock > 0) {
  if (isPremiumUser) {
    console.log("Priority delivery");
  } else {
    console.log("Standard delivery");
  }
} else {
  console.log("Out of Stock");
}

//8
let score = 45;

let attendance = 80;

if (attendance >= 75) {
  if (score >= 40) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
} else {
  console.log("Not elidible due to low attendence");
}

//9
let hasAccount = true;
let isVerified = false;

if (hasAccount) {
  if (isVerified) {
    console.log("Access granted");
  } else {
    console.log("verify your account");
  }
} else {
  console.log("Create an account");
}

//10
const deviceOn = true;
const battery = 10;

if (deviceOn) {
  if (battery > 20) {
    console.log("Device running");
  } else {
    console.log("Low battery");
  }
} else {
  console.log("Device is off");
}

//switch

//1
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid Day");
}

//2
let rrole = "admin";

switch (role) {
  case "admin":
    console.log("Admin access");
    break;
  case "editor":
    console.log("Editor access");
    break;
  case "user":
    console.log("User access");
    break;
  default:
    console.log("Guest Access");
}

//3
let light = "green";

switch (light) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get Ready");
    break;
  case "green":
    console.log("Go");
    break;
}

//4
let statuss = "success";
switch (statuss) {
  case "success":
    console.log("Payment successful");
    break;
  case "pending":
    console.log("Payment pending");
    break;
  case "failed":
    console.log("payment failed");
    break;
}

//5

let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Very Good");
    break;
  case "C":
    console.log("Good");
    break;
  default:
    console.log("Needs Imorivement");
}

//6
let choice = 2;

switch (choice) {
  case 1:
    console.log("Home");
    break;
  case 2:
    console.log("About");
    break;
  case 3:
    console.log("Contact");
    break;
  default:
    console.log("Invalid Code");
}

//7
let code = 404;

switch (code) {
  case 200:
    console.log("Ok");
    break;
  case 404:
    console.log("Not Found");
    break;
  case 500:
    console.log("Server error");
    break;
  default:
    console.log("Code not found");
}

//8
let month = 12;

switch (month) {
  case 12:
  case 1:
  case 2:
  case 3:
    console.log("Winter is Coming");
    break;
  case 4:
  case 5:
  case 6:
  case 7:
    console.log("Summer");
    break;
  case 8:
  case 9:
  case 10:
  case 11:
    console.log("Monsoon");
    break;
  default:
    console.log("Invalid Month");
}

//9
let operator = "+";
let a = 12;
let b = 11;

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "-":
    console.log(a - b);
    break;
  default:
    console.log("Choose valid operator");
}

//10
let browser = "chrome";

switch (browser) {
  case "chrome":
    console.log("Google");
    break;
  case "firefox":
    console.log("Mozila");
    break;
  case "Edge":
    console.log("Microsoft");
    break;
  default:
    console.log("Unknown Browser");
}

//// While
//1
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

//2
// let nummber = 1;

// while (j <= 10) {
//   console.log(nummber);
//   j++;
// }

//3
let count = 5;

while (count > 0) {
  console.log(count);
  count--;
}

//4
let guess = 3;
let correct = 5;

while (guess !== correct) {
  console.log("Wrong guess");
  guess++;
}

//5
let passsword = "1234";

while (passsword.length < 6) {
  console.log("Password too short");
  break; // to avoid infinite loop
}

//

// let input = prompt("Hello can you please");

// console.log(input);

//storage

// Set a cookie
document.cookie =
  "userName=Ashitosh; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";

// Get cookies
console.log(document.cookie);

//session
sessionStorage.setItem("user", "Ashitosh");
console.log(sessionStorage.getItem("user"));

// Remove
// sessionStorage.removeItem("user");

localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));

// Remove
// localStorage.removeItem("theme");
