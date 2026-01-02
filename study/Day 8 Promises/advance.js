/* Clousure : 
An inner function can still access variables of its outer function, even if the outer function is done running
*/

// function outer() {
//     let counter = 0;
//     console.log(count);
//     function inner() {
//        var count = 0;
//         counter++;
//         console.log(counter);
//     }
//     inner();
// }
// outer();

/*
A Promise is an object that represents a value that may not be available yet but will be resolved in the future.

States of a Promise:
Pending → still working.
Fulfilled → success (resolved).
Rejected → failed (error).
 */

let orderProduct = new Promise((resolve,reject)=>{
   let fetchData =  true;
   if(fetchData) {
    resolve('order placed');
   } else {
    reject('No order placed!')
   }
});
orderProduct.then(response => console.log(response));
orderProduct.catch(error => console.log(errq));


function fetchProducts() {
  return new Promise((resolve, reject) => {
    fetch(`https://fakestoreapi.com/products/${10}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          reject("Failed to fetch products!");
        }
      })
      .then(data => resolve(data))
      .catch(error => reject("Error: " + error));
  });
}

fetchProducts()
  .then(products => {
    console.log("Products received!");
    console.log(products);
  })
  .catch(error => console.log(error));

/* Async / Await
Instead of using .then(), we “wait” for a promise result inside an async function.
- async/await cannot work without Promises.
 */
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

async function getData() {
  console.log("Fetching...");
  const data = await fetchData(); // wait until resolved
  console.log(data);
  console.log('wait until get data');
}

getData();

function fetchData() {
    return new Promise ((resolve)=>{
        setTimeout(() => {
          resolve("Data received!");
        }, 2000);
    })
}

async function getData() {
  console.log("Fetching...");
  const value = await fetchData();
  console.log(value);
  const data = await fetchData(); // wait until resolved
  console.log('data==>',data);
  console.log('wait until get data');
}
getData();
