// //array
let arr = [7,3,4,3,9];
// console.log(arr);
// console.log(arr.length)
// console.log(arr[0],arr[arr.length-1])
// nam =['ac','ca','fs','sf','fs'];
// console.log(nam)
// console.log(nam.slice(2,7))
// console.log(nam)
// console.log(nam.splice(4))
// console.log(nam)
// test1= console.log(nam.join(arr));
// console.log(typeof(test1))
// console.log(arr.push(2));//when you console a push() it will return length//2
// //Add an element at the beginning of an array.
// console.log(nam.unshift('weq'));//5
// console.log(nam);
// console.log(slice(' '));

// max subarray input:nums = [-2,1,-3,4,-1,2,1,-5,4] Output: 6

// nums = [-2,1,-3,4,-1,2,1,-5,4]

// var maxSubArray = function(nums) {


// };
// concat
var test2 = ['dwj','ier','iwru','eir','eir'];
var test3 = arr.concat(test2);
console.log(test3);

//reverse 
var test4 = test2.reverse();
console.log(test4)

// tostring 
var test5 = test4.toString();
console.log(test5);
console.log(test5.split(' ').reverse().join());
//map
var test9 =[1,3,45,64,67];
var test23 = test9.map(item =>item +5);
console.log(test23);
var test12 = test9.map(s => s+9);
console.log(test12);

const arr1 = [
    {id:1, userName:'xyz'},
    {id:2, userName:'abc'},
    {id:3, userName:'rsp'}
];
//filter
var test30 = arr1.filter(item => item.id ===3);
console.log(test30)
var test44 = arr1.filter(s=>s.id ===2)
console.log(test44);

//reduce
// var test93 = test30.reduce(functon(rs,item){
//     return  +item
// },0)
var test1 = ['Nitin', 'Mahesh', 'Shivani', 'Vishnu', 'Ashotosh', 'Nisha', 'Savita'];

var test7 = test1.splice(0,6, 'Archana', 'Ashwini');
console.log(test1);
var test6 = test7.slice(2,7);
console.log(test6);
