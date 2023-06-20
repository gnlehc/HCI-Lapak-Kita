
// document.getElementById("form-field").addEventListener("submit", (event) => {
//     event.preventDefault();
//     var username = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var noTLP = document.getElementById('tlp').value;
//     var password = document.getElementById('password').value;
//     var confirm = document.getElementById('confirm').value;
//     var error = document.getElementById("error");
//     var Checkbox = $("#checkbox").is(":checked");

//     var user = {
//         name: username,
//         email: email,
//         noTLP: noTLP,
//         password: password,
//         confirm: confirm,
//     }

//     if (!username || !email || !noTLP || !password || !confirm || !Checkbox) {
//         error.textContent = "Field is required";
//         // error.style.cssText = "color: red;";
//         var inputElements = document.getElementsByTagName("input");
//         for (var i = 0; i < inputElements.length; i++) {
//             var input = inputElements[i];
//             if (!input.value) {
//                 input.style.borderColor = "red";
//             }
//             else {
//                 input.style.borderColor = "";
//             }
//         }
//         return
//     }

//     else {
//         if (username.length < 4 || username.length > 15) {
//         }
//     }

//     var storedData = localStorage.getItem('user');
//     var jsonArray = storedData ? JSON.parse(storedData) : []
//     jsonArray.push(user);
//     localStorage.setItem('user', JSON.stringify(jsonArray));
//     window.location.href = '/View/login.html'

// });

// const showPassword = document.querySelector('#show-password');
// const PasswordField = document.querySelector('#password');
// showPassword.addEventListener("click", function () {
//     this.classList.toggle("fa-eye-slash");
//     const type = PasswordField.getAttribute("type") === "password" ? "text" : "password";
//     PasswordField.setAttribute("type", type);
// });


// document.getElementById("form-login").addEventListener("submit", (event) => {
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var error = document.getElementById("error");
//     event.preventDefault();
//     var account = localStorage.getItem('user')
//     if (account) {
//         var user = JSON.parse(account)

//         if (user.email === email && user.password === password) {
//             window.location.href = '/View/Home.html'
//         }

//     }
//     if (!user.email && !user.password) {
//         error.textContent = "Field is required";
//     }
// })
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

    error.textContent = ""; // Clear previous error message
    errors.textContent = ""; // Clear previous error message
    error.style.color = ""; // Reset error text color
    errors.style.color = ""; // Reset error text color
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        var input = inputElements[i];
        input.style.borderColor = ""; // Reset input border color
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

