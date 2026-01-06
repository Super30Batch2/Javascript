let userData = JSON.parse(localStorage.getItem("users")) || [];
let editIndex = null;

// Load data when page loads
window.onload = function () {
    displayData();
};

// Save or Update Data
function saveData() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (name === "" || phone === "" || email === "") {
        alert("All fields are required");
        return;
    }

    let userObj = { name, phone, email };

    if (editIndex === null) {
        userData.push(userObj); // CREATE
    } else {
        userData[editIndex] = userObj; // UPDATE
        editIndex = null;
    }

    localStorage.setItem("users", JSON.stringify(userData));
    clearForm();
    displayData();
}

// Display Data in Table
function displayData() {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    userData.forEach((user, index) => {
        let row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td>${user.email}</td>
                <td>
                    <button class="edit-btn" onclick="editData(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteData(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Edit Data
function editData(index) {
    document.getElementById("name").value = userData[index].name;
    document.getElementById("phone").value = userData[index].phone;
    document.getElementById("email").value = userData[index].email;

    editIndex = index;
}

// Delete Data
function deleteData(index) {
    userData.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(userData));
    displayData();
}

// Clear Input Fields
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}
