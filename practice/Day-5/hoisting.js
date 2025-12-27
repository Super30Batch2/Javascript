// what is hoisting?
console.log("Hoisting:",value);
var value = 10;

// What is clouser?
// We can access outer function varibale into inner function but vise varse we can't.

/* function outer() {
    const outerVariable = 100;
    console.log(innerVariable);
    function innner() {
        var innerVariable = 500;
        console.log(outerVariable);
    }
    innner();
}
outer(); */


function outerFunction() {
    let outerVariable = "I am from outer function";

    function innerFunction() {
        let innerVariable = "I am from inner function";
        console.log(outerVariable); // Accessing outer variable
        console.log(innerVariable); // Accessing inner variable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure();
