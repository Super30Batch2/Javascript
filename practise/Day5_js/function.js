//function with paramerter and argument
function great(){
    console.log("hello world");
}

great();

//arithmatic function
function add(a,b){
    console.log(a+b);
}
add(4,5);

//Anonymous function
const greet = function() {
  return "Hi there!";
};
console.log(greet()); 


//callback function
function num(n, callback) {
    return callback(n);
}
const double = (n) => n * 2;
console.log(num(5, double));

//arrow function
const square = n => n * n;
console.log(square(4)); // 16

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//  print 1 to 5 number after each 1 sec
//  arrow Function () =>
//  clearInterval stops the repeated execution of the interval function.

let i = 1;

let interval = setInterval(() => {
    console.log(i);
    i++;

    if (i > 5) {
        clearInterval(interval);
    }
}, 1000);


let num = 225;
if (num * 3){
  if(num * 5){
    console.log("Fizz");
  }
console.log("buzz");
}
else{
  console.log("buzzfizz");
} 