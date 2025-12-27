/**what is hoisting? */

console.log("Hoisting:",value);
var value = 10;

/**what is clouser? */
/**we can access outer function variable into function but vise varse we can't. */

function outer(){
    var outerVariable = 100;
    console.log(innerVariable);
    function inner(){
        var innerVariable=500;
        console.log(outerVariable);
    }
    inner();
}
outer();
