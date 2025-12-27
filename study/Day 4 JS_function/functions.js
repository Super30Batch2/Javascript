
fun();
functionName();
// function defincation

function functionName(){
    console.log("function-1")
    // block of code goes here
}

/* function declartion */ 
function add() {
    let a = 10;
    let b = 10;
    var c = a + b;
    console.log(c);
}
add();
var result = add(10, 12);
console.log(result);
// until and unless u call any function, block of code inside function will not be executed.

/** function expression */ 
function fullName(fName, LName){
    fullNm = fName + LName;
    return fullNm;
}

var result2= fullName('Rahul', 'Kulkarni');
console.log(result2);

function fun() {
    console.log("This is simple fuction");
}


/* Retureable function */
function demo() {
   return "This is testing";
}
const result = demo();
console.log(result);

/* Functio with parameter*/

function multiple(a,b) {
    console.log(a*b);
}
multiple(3,8);

/*Function with default paramter*/

function multiple(a,b=5) {
    console.log(a*b);
}
multiple(3);

/** Anomnous function */

const test = function() {
    console.log("I m anomnous function");
}
test();

/* Call back function*/
 
function callBack(test) {
    test();
}
callBack(test);


setTimeout(function () {
  clearInterval(test1);
  let btn = document.querySelector("#SubmitBtn");
  if (btn) {
    btn.click();
    alert("Button clicked");
  }
  console.log("I am timer function");
}, 1500);

const test1 = setInterval(() => {
    console.log("Intervel")
}, 100);

