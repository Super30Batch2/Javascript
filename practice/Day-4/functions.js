


//Simple Function Declaration

function fname()//function decaration
{
    //function body
    console.log("Function declaration");
    
}
fname();  //fuction call

//Function Declaration with Parameters

function add(a,b){
    return a+b ;
}

let result=add(10,5);
console.log(result);

function subtract(a,b){
    return a-b;
}

let result1=subtract(20,10);
console.log(result1);

function calculateTotal(price, quantity) {
  return price * quantity;
}

let total = calculateTotal(500, 2);
console.log("Total Amount:", total);


///function Expression

function fullname(firstname,lastname){
    fullname=firstname+lastname;
    return fullname;
}

let name=fullname("yogesh","mahesh")
  console.log(fullname);

  ///* Retureable function */

  function testing(){
    return "function is testing"
  }

  const result3=testing();
  console.log(result3);

  /* Function with parameter*/
  function addition(a,b){
    console.log(a*b);
  }
  addition(5,20)

  //function with default parameter//

  function addition1(a,b=8){
    console.log(a+b);
    
  }addition1(2);

  ///////////////
  /* setTimeout(function () {
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
}, 5);
 */


////////
