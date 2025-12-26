function validationEmail(email) {
  return email.includes("@") && email.includes(".");
}

console.log(validationEmail("user@gmail.com"));

//fucntion Expression
const handleResponse = function (response) {
  if (response.status === 200) {
    console.log("Success");
  } else {
    console.log("Error Occured");
  }
};

handleResponse({ status: 200 });

//arrow function
const handleClick = () => {
  console.log("Button Clicked");
};

const btn1 = document.getElementById("btn");
console.log(btn1);
btn1.addEventListener("click", handleClick);

//IIFE(Immediatly invoked function expression)
(function (fName) {
  console.log("Hello", fName);
})("ashitosh");

// function addAll(...numbers) {
//   return numbers.filter((n) => n + 2);
// }

// console.log(addAll(10, 20, 30));
