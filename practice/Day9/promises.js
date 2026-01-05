
//Callback hell
/* setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            console.log("Done");
        }, 1000);
    }, 1000);
}, 1000); */


// with promise
/* function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

wait(1000)
    .then(() => wait(1000))
    .then(() => wait(1000))
    .then(() => console.log("Done")); */




// simple exxample:
// let orderProduct = new Promise((resolve,reject)=>{
//     let fetchData = true;

//     if(fetchData){
//         resolve("oreder placed");
//      }
//     else{
//         reject("Order Not Placed");
//     }

// }) // Order placed

// orderProduct.then(response => console.log(response));
// orderProduct.catch(error => console.log(error));

//simple example
/* let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data fetched successfully");
    } else {
        reject("Error while fetching data");
    }
});

// myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
 */

// real time example:
/*     let orderFood = new Promise((resolve, reject) => {
    setTimeout(() => {
        let foodReady = true;

        if (foodReady) {
            resolve("🍔 Food is ready");
        } else {
            reject("❌ Food is not ready");
        }
    }, 2000);
});

orderFood
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
 */

//Promise chaining:

/* new Promise((resolve) => {
  resolve(10);
})
.then((num) => {
    return num * 2;
})
.then((result) => {
    return result + 5;
})
.then((finalValue) => {
    console.log(finalValue); // 25
});
 */
