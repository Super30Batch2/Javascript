/*Conditional Statements in JS:

	Used to make the decision
	we have :
	
	If 
	If else
	nested if else
	switch
	while
	do... while
	for 
	for ... in 
	break 
	continue*/
//if statement 
    let age  =18;

    if(age >=18){
    console.log("You are eligible to vote")
    }

//if...else statement
    let number =5;

    if (number % 2 === 0){
        console.log("even number");
    }else {
        console.log("odd number");
    }

//If...else if...else statement
    let marks = 32;

    if(marks >=75) {
        console.log("distinction");
    } else if (marks >= 60) {
        console.log("first class");
    } else if (marks >= 40) {
        console.log("pass");
    } else {
        console.log("fail");
    }

//switch statement
    let day = 3;

    switch (day) {
        case 1:
            console.log("monday");
        break;
         case 2:
            console.log("tuesday");
        break; 
        case 3:
            console.log("wednesday");
        break;
         case 4:
            console.log("thursday");
        break;
        default:
            console.log("Invalid day");
    }

//tenary Opertator

    let age1 = 16;

    let result = (age1 >= 18) ? "adult" : "minor";
    console.log(result);
