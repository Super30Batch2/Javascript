/**block of code  */
// function fun(){
//     console.log("Hello Function");
// }
// fun();

/**function declartion */

// function declar(){
//     let x = 22;
//     let z = 34;
//     let v = z-x;
//     console.log(v);
// }
// declar();

// until and unless u call any function, block of code inside function will not be executed.

// const res = declar(10,30);

// console.log(res);

/**function expression */

// function expression(email,password){
//      singup= email+password;
//      return singup;
// }

// var result = expression('abc12@','qwe1234t')
// console.log(result);


// fun();

/**Retureab;e function */

// function demo(){
//     return "This is testing";
// }
// var result = demo();
// console.log(result);

/** Functio with parameter */

// function para(x,z){
//       console.log(x+z);
// }
// para(10,22);

/**Function with default paramter */

// function multiple(a,b=10){
//     console.log(a*b);
// }
// multiple(2);

/** Anomnous function */

let anomnous = function(){
    console.log(" I'm Anomnous function ");
}
anomnous();

/**Callback function */

function call(anomnous){
       anomnous();
}
call(anomnous);


/**setTimeout  function */
 var set = setTimeout(()=>{
    console.log("set time");
 },500);

 setTimeout(function(){
    clearInterval(set);
    console.log("I am timer function");
 },1000);
