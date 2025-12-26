
/* let num = Number(prompt("Enter the Number:"));
console.log(num); */

// if number is multiple by 3 ==> print "buzz";
// if number is multiple by 5 ==> print "Fizz";
// if number is multiple by 15 ==> print "buzzFizz";

/* let num = 225;
if (num * 3){
  if(num * 5){
    console.log("Fizz");
  }
console.log("buzz");
}
else{
  console.log("buzzfizz");
} */

// print 1 to 5 number 

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//  print 1 to 5 number after each 1 sec
//  call back Function () =>
//  clearInterval stops the repeated execution of the interval function.

let i = 1;

let interval = setInterval(() => {
    console.log(i);
    i++;

    if (i > 5) {
        clearInterval(interval);
    }
}, 1000);




// let count = 1;

// let intervalId = setInterval(() => {
//     console.log(count);
//     count++;

//     if (count > 5) {
//         clearInterval(intervalId);
//     }
// }, 1000);

// settimeout, setInterval. Doubt

/* setTimeout(function () {
  clearInterval(test);
  let btn = document.querySelector("#SubmitBtn");
  if (btn) {
    btn.click();
    alert("Button clicked");
  }
  console.log("I am timer function");
}, 1500);

const test = setInterval(() => {
    console.log("Intervel")
}, 1000);
 */

