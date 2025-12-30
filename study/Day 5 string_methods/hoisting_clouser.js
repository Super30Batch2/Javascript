// what is hoisting?:-
console.log("Hoisting:",value);
var value = 10;

// What is clouser?
// We can access outer function varibale into inner function but vise varse we can't.

function outer() {
    const outerVariable = 100;
    console.log(innerVariable);
    function innner() {
        var innerVariable = 500;
        console.log(outerVariable);
    }
    innner();
}
outer();