// function fun(){
//     console.log("this is simple function");
// }
// fun();


// function fun(){
//     return "this is simple function";
// }
// fun();


// function demo(){
//     return true;
// }
// const result=demo();
// console.log(result);


// retureable function
// function demo(){
//     console.log("this is testing");
// }
// const result1=demo();
// console.log(result1());


// function with parameter
// function multiple(a,b){
//     console.log(a*b);
// }
// multiple(3,2);


// function with default paramter
// function multiple(a,b=5){
//         console.log(a*b);
//     }
//  multiple(3); 

//  function declartion
//  function fun1(){
//     let a= 6;
//     let c=2;
//     let x=10;
//  }

 /**Anomnous function */

//  const test = function(){
//     console.log("I am anomnous function");
//  }
// test();


/**call back function */
// function callBack(test){
//      test();
// }
// callBack(test);


setTimeout(function(){
    console.log("I am timer function");
},1500);

setTimeout(function(){
    clearInterval(set);
    console.log("I am timer function");
},500);

const set= setInterval(()=>{
    console.log("Intervel")
},100);


// setTimeout(function(){
//     clearInterval(set);
//     let btn=document.querySelector("#Submitbtn");
//     if(btn){
//        btn.click();
//        alert("Button clicked");
//      }
//     // console.log("I am timer function");
// },500);




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




