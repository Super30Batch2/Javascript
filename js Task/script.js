// let a = +prompt("Enter the first value");
// let b = +prompt("Enter the second value");
// let operator = prompt("choose the operation");

// console.log(operator);

// switch (operator) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   case "%":
//     console.log(a % b);
//     break;
//   default:
//     console.log("Choose the correct operation");
// }

// for (let num = 1; num <= 100; num++) {
//   if (num % 15 === 0)  console.log(`num ${num} is buzz and freeze`);
//  if (num % 3 === 0) console.log(`num ${num} is buzz`);
//   if (num % 5 === 0)  console.log(`num is ${num} is freeze`);
//   }

//my code

// setInterval(() => {
//   time += 1;
//   console.log("No of time", time);
//   if (time >= 5) clearInterval();
// }, 1000);

///correct code

// let time = 0;
// const data = setInterval(() => {
//   time += 1;
//   console.log("No of time", time);
//   if (time >= 5) clearInterval(data);
// }, 1000);

/////////////////////////////////////////////**************************TASK CRUD OPERATION USING JS **************************************//////////////////////////////////////////
//select the html elements

let firstName = document.getElementById("firstName");
let email = document.querySelector("#email");
let contact = document.getElementById("Contact-no");
let formBtn = document.querySelector("#form-btn");

//fun for taking the user inputs
const formInput = function (e) {
  e.preventDefault();
  //get the inputted values

  let inputFullName = firstName.value;
  let inputEmail = email.value;
  let inputContact = contact.value;

  localStorage.setItem("fullName", inputFullName);
  localStorage.setItem("email", inputEmail);
  localStorage.setItem("contact", inputContact);

  // let row = document.createElement("row");
  // let td = document.createElement("td");

  /////add the data into the table
  showData(inputFullName, inputEmail, inputContact);
};

//fun to show data into table
const showData = function (name, email, contact) {
  const tablebody = document.getElementById("tablebody");
  const tr = document.createElement("tr");
  let rowId = 1;
  tr.setAttribute("data-id", rowId);
  tr.innerHTML = `<td>${name}</td>
                  <td>${email}</td>
                  <td>${contact}</td>
                  <td><button onclick="deleteRow(${rowId})">Delete</button><td>`;

  tablebody.appendChild(tr);
  rowId++;
};

//to delete the data
const deleteRow = function (id) {
  const row = document.querySelector(`tr[data-id='${id}']`);
  row.remove();
};

formBtn.addEventListener("click", formInput);

// let rowId = 1;
// let editRow = null; // stores the row being edited

// document.getElementById("userForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const contact = document.getElementById("contact").value;

//   if (editRow) {
//     // UPDATE EXISTING ROW
//     editRow.children[0].innerText = name;
//     editRow.children[1].innerText = email;
//     editRow.children[2].innerText = contact;

//     editRow = null; // reset after update
//   } else {
//     // ADD NEW ROW
//     const tr = document.createElement("tr");
//     tr.setAttribute("data-id", rowId);

//     tr.innerHTML = `
//       <td>${name}</td>
//       <td>${email}</td>
//       <td>${contact}</td>
//       <td>
//         <button onclick="editData(${rowId})">Edit</button>
//         <button onclick="deleteData(${rowId})">Delete</button>
//       </td>
//     `;

//     document.getElementById("tableBody").appendChild(tr);
//     rowId++;
//   }

//   document.getElementById("userForm").reset();
// });

// function editData(id) {
//   const row = document.querySelector(`tr[data-id='${id}']`);
//   editRow = row;

//   document.getElementById("name").value = row.children[0].innerText;
//   document.getElementById("email").value = row.children[1].innerText;
//   document.getElementById("contact").value = row.children[2].innerText;
// }

// function deleteData(id) {
//   document.querySelector(`tr[data-id='${id}']`).remove();
// }
