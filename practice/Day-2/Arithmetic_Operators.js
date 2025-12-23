/* 1. Arithmetic Operators:
		Addition
		Subtraction
		multiplication
		Division
		Modulus
		Increment
		Decrement */


//Addition

//1. Calculate Total Price in a Shopping Cart
let price1=80;
let price2=90;
console.log('Addition of product : ',(price1+price2));
//Addition of product :  170

let total=price1+price2;
console.log('Addition=',total);
//Addition= 170

//2.2. Add User Input Values
//Question:
//Two numbers are entered by a user as strings. Add them correctly.
      let user1="50";
      let user2="50";
      let sum=Number(user1)+Number(user2);
      console.log(sum);
      //100
      /* let sum1=(user1+user2);
       console.log(sum1); */
      //5060
     /*  let sum2=(user1)+(user2);
       console.log(sum2); */
       //5060
      /*  let sum3=number(user1)+number(user2);
       console.log(sum3); */
       //5060
       
//Example 1: Subtracting two numbers

      let num1=12;
      let num2=20;
      let total1 =num1-num2;
      console.log("Total=",total1);
      //total= -8

//Example 2: Subtracting mixed values (number & string)

     let x=10;
     let y="8";
     console.log(x-y);
     //2

//Multiplication
//1. Multiply two numbers
  let x1=10;
  let x2=9;
  console.log("Multiplication =",x1*x2);
  //Multiplication = 90

//2.Multiplying string numbers

  let b1="12";
  let b2="13";
  console.log("Multiplication =",(b1*b2));
  //Multiplication = 156

//Division

//1.Dividing two numbers

let d1=12;
let d2=6;
console.log(d1/d2);
//2

//2.Division with string numbers

let f1=12;
let f2=3;
let result=f1/f2;
console.log("Result =",result);
//Result = 4

//Modulus

//1: Finding remainder

let p1=12;
let p2=4;
let result22=p1%p2;
console.log(result22);
//0

//2: Checking even or odd number

let number=7;
if(number % 2===0){
    console.log("number is even");  
}
else
{
      console.log("number is odd");
}

//number is odd

//Increment
let dd=25;
let dt=++dd;
console.log(dt);//26

//pre-increment

let dt1=25;
console.log(++dt1);
console.log(dt1);

//post-increment


console.log(dt1++);
console.log(dt1);

//decrement

let h11=12;
let h12=--h11;
console.log(h11);
//11

//pre-decrement


console.log(--dt1);
console.log(dt1);

//post-decrement


console.log(dt1--);
console.log(dt1);