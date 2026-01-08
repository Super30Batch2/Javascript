// async function getCountry() {
//   try {
//     const res = await fetch("https://restcountries.com/v3.1/name/india");
//     const data = await res.json();

//     console.log("data present on 0 th index", data);
//     console.log("data of name", data[0].name);
//     console.log("data of name of common", data[0].name.common);

//     console.log(data[0].name.common);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getCountry();

////////////////////////////////////////*********************************************************//////////////////////////////////////////////////////

// function getCountry() {
//   const myPromise = new Promise((resolve, reject) => {
//     fetch("https://restcountries.com/v3.1/name/india")
//       .then((res) => {
//         if (!res.ok) {
//           reject("Failed to fetch country data");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         resolve(data); // ✅ promise resolved
//       })
//       .catch((err) => {
//         reject(err); // ❌ promise rejected
//       });
//   });

//   myPromise
//     .then((data) => {
//       console.log("data present on 0th index:", data);
//       console.log("data of name:", data[0].name);
//       console.log("data of name common:", data[0].name.common);
//     })
//     .catch((err) => {
//       console.log("Error:", err.message);
//     });
// }

// getCountry();
///////////////////////////////////////////////////*************************************************************///////////////////////////////////

// function getUSerList() {
//   return new Promise((resolve, reject) => {
//     // fetch(`https://jsonplaceholder.typicode.com/users/${15}`)
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         console.log("response", response);
//         if (response.ok) {
//           return response.json();
//         } else {
//           reject("Failed to fetch products!");
//         }
//       })
//       .then((data) => resolve(data))
//       .catch((error) => reject("Error: " + error));
//   });
// }

// let userList = getUSerList().then((response) => {
//   userList[response];
//   console.log("UserList", userList);
//   if (userList.length > 0) {
//     const filterUser = userList.filter((x) => x.id == 7)[0]; //  filter example.
//     console.log("filterUser====>", filterUser);
//   }
// });

// console.log(userList);

// const getUsersIdTotal = function () {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         if (!res.ok) return console.log("Failed to fetch");
//         return res.json();
//       })
//       .then((data) => {
//         console.log("The Data is", data);
//         resolve(data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

// getUSerList()
//   .then((data) => {
//     console.log("The Data is", data);
//     const idTotal = data.map((currentEle, element) => {
//       console.log(element);
//       currentEle + element[id];
//     }, 0);
//     console.log("Total of Id", idTotal);
//   })
//   .catch(() => {});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const userData = {
//   id: 101,
//   name: "Ashitosh",
//   isActive: true,
//   skills: ["JavaScript", "React", "Node.js"],
//   address: {
//     city: "Pune",
//     state: "Maharashtra",
//     pincode: 411001,
//     geo: {
//       lat: 18.5204,
//       lng: 73.8567,
//     },
//   },
//   education: [
//     {
//       degree: "B.Tech",
//       year: 2023,
//       subjects: ["DSA", "DBMS", "OS"],
//     },
//     {
//       degree: "M.Tech",
//       year: 2025,
//       subjects: ["AI", "ML"],
//     },
//   ],
//   preferences: {
//     theme: "dark",
//     notifications: {
//       email: true,
//       sms: false,
//     },
//   },
//   createdAt: new Date("2024-01-01"),
//   getDetails() {
//     return `${this.name} from ${this.address.city}`;
//   },
// };

// //eg1
// const obj = {
//   name: "Ashitosh",
//   age: 22,
// };

// const obj1Copy = { ...obj };
// ////////////////////////////////////////////
// const obj2 = {
//   name: "Ashitosh",
//   address: {
//     city: "Pune",
//     pin: 411001,
//   },
// };

// const obj2Copy = { ...obj2, address: { ...obj2.address } };

// /////////////////////////////////////////////
// const users = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
// ];

// const user1 = users.map((elem) => {
//   return { ...elem };
// });

// const products = [
//   {
//     name: "Laptop",
//     price: 80000,
//   },
//   {
//     name: "Mobile",
//     price: 30000,
//   },
// ];

// const products1 = products.map((elem) => {
//   return { ...elem };
// });

// products1[0].name = "sandip";
// console.log(products);
// console.log(products1);

//////////////////////////////////////////////////////////////

// const obj = {
//   x: 10,
//   y: 20,
// };

// const objCopy = { ...obj };

///////////////////////////////////////////////////////////
// const obj = {
//   name: "Ash",
//   info: {
//     age: 22,
//     city: "Pune",
//   },
// };

// const objCopy = { ...obj, info: { ...obj.info } };

/////////////////////////////////////////////////////////////

// const users = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
// ];

// const user1 = users.map((element) => {
//   return { ...element };
// });

/////////////////////////////////////////////////////////////////

// const course = {
//   title: "JavaScript",
//   modules: [
//     {
//       name: "Basics",
//       topics: ["var", "let"],
//     },
//   ],
// };

// const cousecopy = {
//   ...course,
//   modules: {
//     ...course.modules.map((ele) => ({ ...ele, topics: [...ele.topics] })),
//   },
// };

////////////////////////////////////////////////////////////////////////

// const orders = [
//   {
//     id: 1,
//     items: ["Book", "Pen"],
//   },
//   {
//     id: 2,
//     items: ["Notebook", "Pencil"],
//   },
// ];

// const orders1 = orders.map((ele) => ({ ...ele, items: [...ele.items] }));

///////////////////////////////////////////////////////////////////////////
// const profile = {
//   id: 10,
//   skills: ["JS", "React"],
//   experience: [
//     {
//       company: "ABC",
//       years: [2022, 2023],
//     },
//   ],
// };

// const profiles = {
//   ...profile,
//   skills: [...profile.skills],
//   experience: {
//     ...profile.experience.map((ele) => ({
//       ...ele,
//       years: [...ele.years],
//     })),
//   },
// };
////////////////////////////////////////////////////////////
// const data = [
//   { config: { flags: [true, false] } },
//   { config: { flags: [true, false] } },
// ];

// const copyData = data.map((ele) => ({
//   ...ele,
//   config: { ...ele.config, flags: [...ele.flags] },
// }));

///////////////////////////////////////////////////////////////////

// const appState = {
//   user: {
//     id: 1,
//     profile: {
//       name: "Ash",
//       contacts: [
//         {
//           type: "email",
//           values: ["ash@example.com", "ash.work@example.com"],
//         },
//         {
//           type: "phone",
//           values: ["9999999999"],
//         },
//       ],
//     },
//   },
//   settings: {
//     theme: "dark",
//     permissions: {
//       admin: false,
//       roles: ["editor", "viewer"],
//     },
//   },
//   logs: [
//     {
//       date: new Date("2024-01-01"),
//       actions: ["login", "view"],
//     },
//   ],
// };

///////////////////////////////////////////////////////////////

// const storeState = {
//   customer: {
//     id: 101,
//     profile: {
//       name: "Ash",
//       addresses: [
//         {
//           type: "home",
//           locations: ["Pune", "Mumbai"],
//         },
//         {
//           type: "office",
//           locations: ["Bangalore"],
//         },
//       ],
//     },
//   },
//   cart: {
//     items: [
//       {
//         productId: 1,
//         details: {
//           colors: ["red", "blue"],
//           sizes: ["M", "L"],
//         },
//       },
//     ],
//   },
//   history: [
//     {
//       date: new Date("2023-12-01"),
//       actions: ["add-to-cart", "checkout"],
//     },
//   ],
// };

// const storeCopy = {
//   ...storeState,
//   customer: {
//     ...storeState.customer,
//     profile: {
//       ...storeState.customer.profile,
//       addresses: {
//         ...storeState.customer.profile.addresses.map((ele) => ({
//           ...ele,
//           locations: [...ele.locations],
//         })),
//       },
//     },
//   },
//   cart: {
//     ...storeState.cart,
//     items: {
//       ...storeState.cart.items.map((ele) => ({
//         ...ele,
//         details: {
//           ...ele.details,
//           colors: [...ele.details.colors],
//           sizes: [...ele.details.sizes],
//         },
//       })),
//     },
//   },
//   history: [
//     ...appstore.history,
//     { date: new Date(), actions: [...appstore.history.actions] },
//   ],
// };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const dashboardState = {
//   user: {
//     id: 7,
//     info: {
//       name: "Ashitosh",
//       roles: ["admin", "editor"],
//     },
//   },
//   projects: [
//     {
//       id: 1,
//       config: {
//         techStack: ["React", "Node"],
//         environments: [
//           {
//             name: "dev",
//             urls: ["localhost"],
//           },
//         ],
//       },
//     },
//   ],
//   notifications: {
//     unread: [
//       {
//         id: 99,
//         meta: {
//           tags: ["urgent", "backend"],
//         },
//       },
//     ],
//     lastChecked: new Date("2024-01-01"),
//   },
// };

// const dashboardStateCopy = {
//   ...dashboardState,
//   user: {
//     ...dashboardState.user,
//     info: {
//       ...dashboardState.user.info,
//       roles: [...dashboardState.user.info.roles],
//     },
//   },
//   projects: {
//     ...dashboardState.projects.map((ele) => ({
//       ...ele,
//       config: {
//         ...ele.config,
//         techStack: [...ele.config.techStack],
//         environments: {
//           ...ele.config.environments.map((ele) => ({
//             ...ele,
//             urls: [...ele.urls],
//           })),
//         },
//       },
//     })),
//   },
//   notifications: {
//     ...dashboardState.notifications,
//     unread: {
//       ...dashboardState.notifications.unread.map((ele) => ({
//         ...ele,
//         meta: { ...ele.meta, tags: [...ele.meta.tags] },
//       })),
//     },
//     lastChecked: new Date(...dashboardState.notifications.lastChecked),
//   },
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const user = {
//   id: 1,
//   name: "Ashitosh",
//   skills: ["JavaScript", "React", "Node"],
//   address: {
//     city: "Pune",
//     state: "Maharashtra",
//     pin: 411001,
//     geo: {
//       lat: 18.5204,
//       lng: 73.8567,
//     },
//   },
//   projects: [
//     {
//       title: "StudyNotion",
//       tech: ["React", "Node", "MongoDB"],
//       details: {
//         users: 500,
//         isLive: true,
//       },
//     },
//     {
//       title: "Real Estate App",
//       tech: ["React", "Tailwind"],
//       details: {
//         users: 200,
//         isLive: false,
//       },
//     },
//   ],
// };

// const user1 = {
//   ...user,
//   skills: [...user.skills],
//   address: { ...user.address, geo: { ...user.address.geo } },
//   projects: user.projects.map((ele) => ({
//     ...ele,
//     tech: [...ele.tech],
//     details: { ...ele.details },
//   })),
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const company = {
//   id: 101,
//   name: "TechNova",
//   founded: 2018,
//   departments: [
//     {
//       name: "Engineering",
//       teams: [
//         {
//           teamName: "Frontend",
//           lead: {
//             name: "Ashitosh",
//             experience: 3,
//           },
//           members: [
//             {
//               id: 1,
//               skills: ["React", "JavaScript"],
//               availability: { remote: true, hours: 8 },
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   locations: {
//     india: {
//       city: "Pune",
//       offices: [
//         { floor: 3, capacity: 50 },
//         { floor: 5, capacity: 80 },
//       ],
//     },
//   },
//   meta: {
//     createdAt: new Date(),
//     isHiring: true,
//   },
// };

// const companyCopy = {
//   ...company,
//   departments: company.departments.map((ele) => ({
//     ...ele,
//     teams: ele.teams.map((ele1) => ({
//       ...ele1,
//       lead: { ...ele1.lead },
//       members: ele1.map((ele2) => ({
//         ...ele2.members,
//         skills: [...ele2.skills],
//         availability: { ...ele2.availability },
//       })),
//     })),
//   })),
//   locations: {
//     india: {
//       ...company.locations,
//       offices: company.locations.india.offices.map((ele) => ({ ...ele })),
//     },
//   },
//   meta: { ...company.meta, createdAt: new Date(company.meta.createdAt) },
// };

////////////////////////////////////////////////////////////PROMISES/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const logIn = function () {
//   return new Promise((resolve, reject) => {
//     let isLoggedIn = false;

//     if (isLoggedIn) {
//       resolve("User is Logged In Successfully");
//     } else {
//       reject(new Error("Log In Failed"));
//     }
//   });
// };

// logIn()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

////////////////////////////////

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id: 1, name: "Ashitosh" }), 1000);
//   });
// }

// function getPosts(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
//   });
// }

// getUser()
//   .then((user) => {
//     console.log(user.name);
//     return getPosts(user.id);
//   })
//   .then((posts) => {
//     console.log(posts);
//   })
//   .catch((err) => console.log(err));

//doing the same thing using async await

// async function fetchUserData() {
//   try {
//     const user = await getUser();
//     console.log(user.name);

//     const posts = await getPosts(user.id);
//     console.log(posts);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchUserData();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//using call backks
// function sayHello(callback) {
//   setTimeout(() => {
//     callback("Hello World");
//   }, 500);
// }

// sayHello(function (message) {
//   console.log(message);
// });

//using promise

// const prom1 = new Promise((resolve, reject) => {
//   const message = "hello World";
//   setTimeout(() => {
//     resolve(message);
//   }, 500);
// });

// message.then((data) => console.log(data));

///////////////////////////////////////////////////////
// function getNumber(callback) {
//   setTimeout(() => {
//     callback(10);
//   }, 500);
// }

// getNumber(function (num) {
//   console.log(num * 2);
// });

// const prom2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   });
// });

// prom2.then((data) => console.log(data * 2));

// function checkEven(num, callback) {
//   setTimeout(() => {
//     if (num % 2 === 0) {
//       callback(null, "Even number");
//     } else {
//       callback("Odd number");
//     }
//   }, 500);
// }

// checkEven(4, function (err, result) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// const prom3 = new Promise((resolve, reject) => {
//   let num = 2;
//   setTimeout(() => {
//     if (num % 2 == 0) {
//       resolve("Even Number");
//     } else {
//       reject("Odd Number");
//     }
//   }, 500);
// });

// prom3.then((data) => console.log(data)).catch((err) => console.log(err));

//////////////////////////////////////////////////////////////////////////////////////////////////

// function fetchUser(callback) {
//   setTimeout(() => {
//     callback({ id: 1, name: "Ashitosh" });
//   }, 500);
// }

// fetchUser(function (user) {
//   console.log(user.name);
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////

// const fetchUser1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Ashitosh" });
//     }, 500);
//   });
// };

// fetchUser1().then((data) => console.log(data.name));

//////////////////////////////////////////////////////////////////////////////////////////////////////

// function getUser(callback) {
//   setTimeout(() => {
//     callback({ id: 1, name: "Ashitosh" });
//   }, 500);
// }

// function getPosts(userId, callback) {
//   setTimeout(() => {
//     callback(["Post 1", "Post 2"]);
//   }, 500);
// }

// getUser(function (user) {
//   getPosts(user.id, function (posts) {
//     console.log(posts);
//   });
// });

// const getUser1 = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Ashitosh" });
//     }, 500);
//   });
// };
// const getPosts1 = function (user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Post1 of user ${user.id} and post2 of ${user.name}`);
//     }, 500);
//   });
// };

// getUser1().then((user) => {
//   return getPosts1(user.id).then((data) => console.log(data));
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function fetchUsers(callback) {
//   setTimeout(() => {
//     callback([
//       { id: 1, name: "Ashitosh" },
//       { id: 2, name: "Rahul" },
//     ]);
//   }, 500);
// }

// fetchUsers(function (users) {
//   console.log(users[0].name);
// });

// const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, name: "Ashitosh" },
//         { id: 2, name: "Sanket" },
//       ]);
//     }, 500);
//   });
// };

// fetchUser().then((user) => console.log(user[0].name));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function loginUser(email, password, callback) {
//   setTimeout(() => {
//     if (email === "test@mail.com" && password === "1234") {
//       callback(null, "Login successful");
//     } else {
//       callback("Invalid credentials");
//     }
//   }, 500);
// }

// loginUser("test@mail.com", "1234", function (err, msg) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(msg);
//   }
// });

// const loginUser1 = (email, password) => {
//   return new Promise((resolve, reject) => {
//     return email === "test@mail.com" && password === "1234"
//       ? resolve("Login Succcessful")
//       : reject("Invalid Credentials");
//   }, 500);
// };

// loginUser1("test@mail.com", "1234")
//   .then((user) => console.log(user))
//   .catch((err) => console.log(err));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getUser(callback) {
//   setTimeout(() => {
//     callback({ id: 1, name: "Ashitosh" });
//   }, 500);
// }

// function getOrders(userId, callback) {
//   setTimeout(() => {
//     if (!userId) {
//       callback("User ID missing");
//     } else {
//       callback(null, ["Order1", "Order2"]);
//     }
//   }, 500);
// }

// getUser(function (user) {
//   getOrders(user.id, function (err, orders) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(orders);
//     }
//   });
// });

// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ id: 1, name: "Ashitosh" });
//   }, 500);
// });

// const getOrders1 = (userId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!userId) {
//         reject("Call Id Missing");
//       } else {
//         resolve(["Order1", "Order2"]);
//       }
//     }, 500);
//   });
// };

// getUser
//   .then((user) => {
//     return getOrders1(user.id);
//   })
//   .catch((err) => console.log(err));

/////////////////////////////////////////////////////////////////////////////////////////////

// const fetchUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((user) => resolve(user))
//       .catch((err) => reject("Error While Fetching Error", err));
//   });
// }, 500);

// const fetchPost = (userId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         .then((post) => resolve(post))
//         .catch((err) => reject(err));
//     }, 500);
//   });
// };

// fetchUser
//   .then((user) => {
//     return fetchPost(user.id).then((post) => console.log(post));
//   })
//   .catch((err) => console.log(err));

////////////////////////////////////////////////////////////////////
const fetchData = () => {
  return fetch("https://jsonplaceholder.typicode.com/users/2").then((user) => {
    if (!user.ok) {
      throw new Error("issues while Fetching user");
    } else {
      return user.json();
    }
  });
};

const fetchPost = (userId) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  ).then((post) => {
    if (!post) {
      throw new Error("Error WHile Fetching the posts");
    } else {
      return post.json();
    }
  });
};

fetchData()
  .then((user) => {
    return fetchPost(user.id);
  })
  .then((todos) => {
    return todos.map((todo) => todo);
  });
