document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("Form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   document.getElementById('Fname').innerText= name;
   document.getElementById('FEmail').innerText= email;
  });
});
