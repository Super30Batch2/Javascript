let test1 = ['Nitin', 'Mahesh', 'Shivani', 'Vishnu', 'Ashotosh', 'Nisha', 'Savita'];

// push
// let test2 = test1.push('xyz');
// console.log(test1);

//slice (first index, end index-1)

// console.log(test1.slice(1,4))

// let test15 = [1,2,3,4,5];

// splice
// console.log(test1.splice(0,4,'abc','xyz'));
// console.log(test1);

// let test18 = test15.reduce(function(res, item){
//     return res + item
// },1);
// console.log(test18);
// const data = test1.join(' ')
// console.log(data);
// console.log(typeof(data));

// const str = "mera bharat mahan";
// const spl = str.split('');
// console.log(spl);
// const rev = spl.reverse();
// console.log(rev);
// const join = rev.join('');
// console.log(join);

// console.log(test1.toString());

// map.
// const num = [2,4,8,2,7,6,7];

// const map = num.map((x)=>x*5);
// console.log(map);

// filter
const arr500 = [
    {id:1, userName:'xyz', role:'engineer'},
    {id:2, userName:'abc', role:'account'},
    {id:3, userName:'rsp', role:'engineer'}
];
 const fil = arr500.filter(val=> val.role === 'engineer');
 console.log('Filter output :',fil);

 // find
  const find = arr500.find(val=> val.role === 'engineer');
 console.log('find output :',find);

 // Reduce

 const num = [2,4,8,2,7,6,7];
 const test18 = num.reduce(function(res, item){
    return res + item
}, 0);
console.log(test18);

