//Print numbers from 1 to 5 (while loop)
let i=1;
while (i<=5){
    console.log(i);
    i++;
}

//Print even numbers from 1 to 10
console.log("Print even numbers from 1 to 10");
let p=2;
while(p<=10){
    console.log(p);
    p+=2;
}

//do while

//Print numbers from 1 to 5 (do...while)
console.log("Print numbers from 1 to 5 (do...while)")
let k=1;
do{
    console.log(k);
    k++;

}while(k<=5);

//

let password;
let correctPassword = "1234";

do {
  password = "1234"; // assume user input
  console.log("Checking password...");
} while (password !== correctPassword);

console.log("Login Successful");