//Perform arithmetic operation based on operator.

let a=10;
let b=5;
let operator="-";
switch(operator){
    case "+":
        {
            console.log(a+b);
        }
        break;
    case "-":
        {
            console.log(a-b);
        }
        break;
    case "*":
        {
            console.log(a*b);
        }
        break;
    case "/":
        {
            console.log(a/b);
        }
        break;
    default:
        console.log("Invalid Operator");
}

//Check traffic signal

let signal="red";
switch(signal){
    case "red":{
        console.log("Stop")
    }
    break;
    case "green":{
        console.log("Go")
    }
    break;
    case "yellow":{
        console.log("Get Ready")
    }
    break;
    default:
    console.log("Invalid Signal");
}