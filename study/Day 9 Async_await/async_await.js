/* Async / Await
Instead of using .then(), we “wait” for a promise result inside an async function.
- async/await cannot work without Promises.
 */

function getPayment() {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve('payment successful');
      // console.log('payment successful');
    }, 2000);
  })
}

function productReceived() {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("product received");
      // console.log('product received');   
    }, 1000);
  });
}

async function getProduct() {
  console.log('order placed');
  const payment = await getPayment();
  console.log(payment);
  const product = await productReceived();
  console.log(product);
}
getProduct();