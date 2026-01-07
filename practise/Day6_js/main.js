let test1 = ['nitin','mahesh','shivani','vishnu','ashitosh','nisha','ram','shree'];

// push
// let test2 = test1.push('xyz');
// console.log(test1);

// slice

// console.log(test1.slice(0,4, 'abc','xyz'));
// console.log(test1);

// let test18 = test1.reduce(function(res, item){
//     return res + item ;
// },1);
// console.log(test18);
// const data = test1.join('');
// console.log(data);
// console.log(typeof(data));

const str = "mera bharat mahan";
const spl = str.split('');
// console.log(spl);
const rev = spl.reverse();
// console.log(rev);
const join = rev.join('');
// console.log(join);

// console.log(test1.toString());

// map
// const num = [2,4,8,2,7,6,7];
// const map = num.map((x)=>x*5);

// console.log(map);
// filter 
const arr500 =[
    {id:1,username:'xyz',role:'engineer'},
    {id:2,username:'abc',role:'account'},
    {id:3,username:'rsp',role:'engineer'}
];
// const fil = arr500.filter(val=> val.role === 'account');
// console.log('filter output :',fil);
// find
// const find =arr500.find(val=> val.role ==='engineer');
// console.log('find output :',find);

// reduce
const num =[2,4,5,8,6,8,5,7,5];
const test18 =num.reduce(function(res, item){
    return res + item
},0);
console.log(test18);

