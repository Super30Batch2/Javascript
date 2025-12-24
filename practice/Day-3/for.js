//for loop
//print numbers one to five
console.log("print numbers one to five")
for(let i=1;i<=5;i++)
{
console.log(i);
}


console.log("even numbers form 1 to 10")

//print even numbers form 1 to 10 

for(let i=1;i<=10;i++)
{
    if(i%2===0){
        console.log(i);
    }

    
}

//Find the sum of numbers from 1 to 5
console.log("Find the sum of numbers from 1 to 5");
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log(sum);

//Print multiplication table of 5
console.log("Print multiplication table of 5");

let table=5;
for(i=1;i<=10;i++){
    table=5*i;
    console.log("5 "+" x "+i+" = ",table);
}

