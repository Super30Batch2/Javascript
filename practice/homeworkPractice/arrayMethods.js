console.log("Array Methods in Javascript");

var arr = ['shivam','krishana','yash','ram','raghav'];
// var num = [1,2,4,3,5];
var arrobj = [
    {id:1, name:'shiv'},
    {id:2 , name:'ram'},
    {id:3 , name:'yash'}
];

console.log(arr);
// 1.push
var push = arr.push('krishana');
console.log(push);
console.log(arr);

// 2.pop
var pop = arr.pop();
console.log(pop);

// 3.unshift
var unshif = arr.unshift('vinu');
console.log(unshif);
console.log(arr);

// 4.shift
var shif = arr.shift();
console.log(shif);
console.log(arr);

// 5.slice
var slic = arr.slice(1,3);
console.log(slic);

// 6.splice
// var splic = arr.splice(0,2,'manu','sara');
// console.log(splic);
// var splic1 = arr.splice(5);
// console.log(splic1)

// 7.join
var join = arr.join();
console.log(join);

// 8.reverse
var revers = arr.reverse();
console.log(revers);

var rev = 'rahul';
var rev1 =rev.reverse;
console.log(rev1);

// 9.toString
var tostr = arr.toString();
console.log(tostr);

// 10.map
var num = [1,2,4,3,5];
var map = num.map(item => item+5);
console.log(map);

// 11.filter 
var f = [{id:1},{id:2},{id:1}];
var filte = f.filter(item =>item.id===1);
console.log(filte);

// 12.find
var fin = f.find(item => item.id==1);
console.log(fin);

// 13.reduce
var reduc = num.reduce(function(res,item){
    return res + item;
},1);
console.log(reduc);

// reduce(function(x,y){},0);

