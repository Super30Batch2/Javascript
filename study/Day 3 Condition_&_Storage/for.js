// var test1 = 10;

// for(let i = 0; i<=5; i++){
//     console.log(i);
// }

const arr = [2,5,8,7,6,8];
const str = "mera bharat mahan";

// function arrFun() {
//     for (let i=2; i <= arr.length; i++) {
//         console.log(i);
//     }
// }
// arrFun();

function strFun(str) {
    let x = '';
    for (let val of str) {
        x = val+x;
    }
    console.log(x);
}
strFun(str);

// for(var i=0; i<5; i++) {
//     console.log(i);
// }

// for loop on string
let x= '';
for (let value of str) {
    x= value+x;
}
console.log(x);

// for loop on array
for( i=0; i < arr.length; i++) {
    console.log(arr[i] % 2 !== 0);
}