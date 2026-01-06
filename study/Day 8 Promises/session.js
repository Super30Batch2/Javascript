// Clousure

function outer () {
    let counter = 0;
    if(counter == 0) {
        return;
    } else {
        console.log('Api call');
    }
    // num--;
    // console.log(num);
    function inner() {
        counter++;
        console.log(counter);
    }
    inner();
    return true
}
let add = outer();
console.log(add);


// Promises : 

// let orderProduct = new Promise((resolve,reject)=>{
//     let data = false;
//     if(data) {
//         resolve('Data found');
//     } else {
//         reject('No data');
//     }
// })
// orderProduct.then(response=> console.log(response))
// .catch(error=> console.log(error));


// function fetchProducts() {
//   return new Promise((resolve, reject) => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => {
//         if (response.ok) {
//         debugger;
//           return response.json();
//         } else {
//           reject("Failed to fetch products!");
//         }
//       })
//       .then(data => resolve(data))
//       .catch(error => reject("Error: " + error));
//   });
// }
// fetchProducts()
//   .then(products => {
//     debugger;
//     console.log("Products received!");
//     console.log(products);
//   })
//   .catch(error => console.log(error));


// Async/await

function delivery() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          resolve('product delivered');
        }, 3000);
    })
}

function payment() {
    return new Promise ((resolve, reject)=>{
       setTimeout(() => {
         resolve('payment success');
       }, 5000);
   })
}

function orderPlaced() {
    console.log('orderPlaced');
    // payment();
    let pay =  payment();
    console.log(pay);
    // delivery();
    let del = delivery();
    console.log(del);
    console.log('Product Received');
}
orderPlaced();
