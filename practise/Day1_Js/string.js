// var day = "A day in Pune while feeling confused about my career.";

// console.log(day)
// 1.typeof
// console.log(typeof(day));

// 2.valueof
// console.log(day.valueOf());

// 3.charAt
// var day1 = day.charAt(7);
// console.log(day1);

// will return 7 th position character from above string.
// will return empty if length and index not match 

// 4.length
// console.log(day.length);
// will return length of the string.

// 5.charcodeAt
// day2 = day.charCodeAt(10);
// console.log(day2);
// will return the ASCII value of that charter

// 6.concationation
// var day3 = day + " day in a life";
// console.log(day3);

// 7.indexOf
// var day4 = day.indexOf("pune");
// console.log(day4);
// will return start index of char or string 
//if its available in the string otherwise this will return -1

// 8.replace 
// var day5 = da


/////////////////////////////////////////////////////////////////////////////////////////
// let const var 
//Theory
// Redeclaration reassign the value is allowed it uses functional scope
//drawbacks :- name collasions and override

var name = "Shantanu";
var name = "Patil";   // allowed (re-declared)

console.log(name); 

//////////////////////////////////////////////////////////////////////////////////////////
//reassign a value which is block scope

let age = 25;
age = 26;        // allowed (updated)
console.log(age);

//////////////////////////////////////////////////////////////////////////////////////////
//we can not redeclare variable and reassign the value
//using const is considered as good practises

const s = 12;

///////////////////////////////////////////////////////////////////////////////////////////
//understand the concept of block scope and the function scope


//in the case of function scope we can access the variable within the function

const function1 = function(){
    //1st variable declaration
    var firstName = 'Shantanu';
    if(firstName){
        //2nd variable is declaration
       var lastName ='Patil';
        console.log("firstName is",firstName)
    }

    //accessibel outside the blocks 
    console.log("lastName",lastName)
}

function1()


////////////////////////block scope /////////////////////

//In the case of let and const it can be accessible within the block only so they are block scoped 
const function2 = function(){
    //1st variable declaration
    let firstName = 'Shantanu';
    if(firstName){
        //2nd variable is declaration
       let lastName ='Patil';
        console.log("firstName is",firstName)
        firstName="sandip"
        console.log("firstName",firstName)
    }

     //accessibel outside the blocks 
    console.log("lastName",lastName)
}

function2()