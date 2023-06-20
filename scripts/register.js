
document.getElementById("form-field").addEventListener("submit", (event) => {
    event.preventDefault();
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var noTLP = document.getElementById('tlp').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    var error = document.getElementById("error");
    var errors = document.getElementById("error-check");
    var checkbox = document.getElementById('checkbox').checked;

    if (!username || !email || !noTLP || !password || !confirm || !checkbox) {
        error.textContent = "Fields are required";
        errors.textContent = "You must agree to the terms to sign up";
        error.style.color = 'red';
        errors.style.color = 'red';
        var inputElements = document.getElementsByTagName("input");
        for (var i = 0; i < inputElements.length; i++) {
            var input = inputElements[i];
            if (!input.value) {
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "";
            }
        }
        return;
    }

    if (username.length < 4 || username.length > 15) {
        error.textContent = "Username length should be between 4 and 15 characters.";
        return;
    }

    error.textContent = "";
    errors.textContent = "";
    error.style.color = "";
    errors.style.color = "";
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        var input = inputElements[i];
        input.style.borderColor = "";
    }

    var user = {
        name: username,
        email: email,
        noTLP: noTLP,
        password: password,
        confirm: confirm,
    };

    var storedData = localStorage.getItem('user');
    var jsonArray = storedData ? JSON.parse(storedData) : [];
    jsonArray.push(user);
    localStorage.setItem('user', JSON.stringify(jsonArray));
    window.location.href = '/View/login.html';
    // localStorage.clear()
});


const showPassword = document.querySelector('#show-password');
const passwordField = document.querySelector('#password');
showPassword.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});
const showConPassword = document.querySelector('#show-conpassword');
const conPasswordField = document.querySelector('#confirm');
showConPassword.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type = conPasswordField.getAttribute("type") === "password" ? "text" : "password";
    conPasswordField.setAttribute("type", type);
});

