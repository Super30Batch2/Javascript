// 1. Cookies:
// document.cookie = "username=CTS Pune; expires:Wed, 05 Sep  2021 09:45:39 UTC";
// document.cookie = 

// data =[1,2,3];
// var myCookie = document.cookie;

// console.log(myCookie);

// 2. Local storage:

data ="CTS Pune";
localStorage.setItem('companyName', data);
// localStorage.removeItem

let Sname = "yogesh";
localStorage.setItem('StudentName',Sname);


var res = localStorage.getItem('companyName');

// localStorage.removeItem('companyName');

console.log(res);


data2= "Angular";
sessionStorage.setItem('className', data2);
var res2 = sessionStorage.getItem('className');
console.log(res2);

sessionStorage.setItem('demo', 'CTS');

console.log(sessionStorage.getItem('demo'));

// // sessionStorage.removeItem('demo');
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC";

// const cookies = document.cookie("username = Pune; expire: expires=Thu, 18 Dec 2025 12:00:00 UTC");

const studName = localStorage.getItem('StudentName');
console.log(studName);
if(studName === 'yogesh') {
    console.log('He is present');
} else {
    console.log('HE is absent');
}