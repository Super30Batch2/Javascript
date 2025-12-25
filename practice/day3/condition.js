// switch 
var day = 5;
switch(day){

    case 0:
    day ='Sunday';
    break;
    
    case 1:
    day ='Monday Hello Nice day';
    break;

    case 2:
    day ='Tuesday';
    break;

    case 3:
    day ='Wednseday';
    break;

    case 4:
    day ='Thrusday';
    break;

    case 5:
    day ='Friday';
    break;

    default:
    day ='Saturday';
    break;
}


console.log(day);

x=5;
while(x<10){
    console.log(x);
    x++;
}
//Print numbers from 10 to 1 using a while loop.
  let dum=10;
while(dum!=0){
  
    console.log(dum);
      dum--;
}
console.log("Print all even numbers between 1 and 50.")
// Print all even numbers between 1 and 50.
for(let i =0; i<=50;i++){
    if(i%2==0){
        console.log(i);
    }
  
}
//Print all even numbers between 1 and 50.
console.log('Print all even numbers between 1 and 50.');
for(let j =0; j<=50;j++){
    if(j%2 !=0){
        console.log(j);

    }
}


console.log("Print the multiplication table of 5.");
for(let p = 0; p <=10; p++){
    console.log("2 *" +`${p}`+ " = " + `${2*p}`);
}
//Find the sum of numbers from 1 to 100
console.log("Find the sum of numbers from 1 to 100.");
let sums =0;
for(let q = 0; q <=100; q++){
    
    sums= sums+q;
    
}
console.log(sums);

//Print all numbers between 1 and 100 that are divisible by 3.
for(let y = 0; y <= 100 ; y++){
    if(y%3==0){
        console.log(y);
    }
}

//Count how many numbers between 1 and 100 are divisible by 5.
let count =0;
for(let c = 0; c <= 100 ; c++){
    
    if(c%5==0){
        count++;
    }
   
}
console.log(count)

var test1 = "A+";

if(test1 == "A+"){
    console.log('blood group is A+');
} 

else {
    console.log("not sure");
}

