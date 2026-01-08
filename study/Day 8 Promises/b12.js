// const promiseEx = new Promise((resolve,reject)=>{
//     const isDataReceived = false;
//     if(isDataReceived) {
//         resolve('Data received');
//     } else {
//         reject('Data failed to receive');
//     }
// });
// promiseEx.then((response)=> console.log(response));
// promiseEx.catch((error)=> console.log(error));

function getUSerList() {
  return new Promise((resolve, reject) => {
    // fetch(`https://jsonplaceholder.typicode.com/users/${15}`)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject("Failed to fetch products!");
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject("Error: " + error));
  });
}

var userList = [];
getUSerList().then((response) => {
  userList = response;
  console.log("UserList", userList);
  if (userList.length > 0) {
    const filterUser = userList.filter((x) => x.id == 7)[0]; //  filter example.
    console.log("filterUser====>", filterUser);
  }
});

console.log(userList);
