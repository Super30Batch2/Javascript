console.log("Array Method ");

let arr =['shiv','ram','krishana','raghav'];
// console.log(typeof(arr[0]));

// 1. pop 
let pop = arr.pop();
console.log(pop);

let num = [1,2,3,1,2];
// console.log(num);
// console.log(typeof(num[0]));
// console.log(num[1]);

// let obj = [
//     {id:1, username:'ram', age:1},
//     {id:2, username:'shiv', age:6},
//     {id:3, username:'krishana', age:1.5},
//     {id:4, username:'yash', age:5},
//     {id:5, username:'savi', age:10},
//     {id:6, username:'sai', age:8}
// ]
// console.log(typeof(obj));
/** 2. length */
// console.log(arr.length);

// console.log(obj);
// console.log(typeof(obj));


// console.log(arr);
// console.log(typeof(arr));

// 3. push

// let pu = arr.push('yash');
// console.log(arr);

// 4.slice
// console.log(arr.slice(1,3));

// 5.splice

// console.log(arr.splice(0,2));
// console.log(arr.splice(0,1,'chhotu','mothu','chiku'));
// console.log(arr);

// 6. join 
// var arr1 = arr.join(' ');
// console.log(arr1);
// console.log(typeof(arr1));

// 7. reverse

// var str = "Hello this is a javascript";
// console.log(str);
// var spl = str.split('');
// console.log(spl);
// var reverse = spl.reverse();
// console.log(reverse);
// var res = reverse.join('');
// console.log(res);


// 8.array convert toSting
// console.log(arr.toString());

// 9.map

// const num1 = [2,1,3,5,4,1];
// const map = num1.map((x)=>x*2); 
// console.log(map);


// 10.filter
// let obj = [
//     {id:1, username:'ram', age:1},
//     {id:2, username:'shiv', age:6},
//     {id:3, username:'krishana', age:1},
//     {id:4, username:'yash', age:5},
// ]
// let filter = obj.filter(val=>val.age === 1);
// console.log("filter output :", filter);

// 11.find
// let find = obj.find(val=>val.age === 1);
// console.log("Find the age :",find);


// 12. reduce
// var test = num.reduce(function(res,item){
//     return res + item
// },1);
// console.log(test);

// const red = [1,2,4,6,3];
// const red1 = red.reduce(function(resp,item){
//     return resp + item;
// },2);
// console.log(red1);

// 13. concat
let con = ['sai','savi','vinu','abhi'];
let cat = ['virat','chiku','manu'];
let concat = con.concat(cat);
console.log(concat);
