
document.getElementById("form-field").addEventListener("submit", (event) => {
    event.preventDefault();
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var noTLP = document.getElementById('tlp').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    var error = document.getElementById("error");

    var user = {
        name: username,
        email: email,
        noTLP: noTLP,
        password: password,
        confirm: confirm,
    }

    if (!username || !email || !noTLP || !password || !confirm) {
        error.textContent = "Field is required";
        // error.style.cssText = "color: red;";
        var inputElements = document.getElementsByTagName("input");
        for (var i = 0; i < inputElements.length; i++) {
            var input = inputElements[i];
            if (!input.value) {
                input.style.borderColor = "red";
            }
            else {
                input.style.borderColor = "";
            }
        }
        return
    } else {
        if (username.length < 4 || username.length > 15) {
        }
    }

    var storedData = localStorage.getItem('user');
    var jsonArray = storedData ? JSON.parse(storedData) : []
    jsonArray.push(user);
    localStorage.setItem('user', JSON.stringify(jsonArray));
    window.location.href = '/View/Home.html'

});

const showPassword = document.querySelector('#show-password');
const PasswordField = document.querySelector('#password');
showPassword.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type = PasswordField.getAttribute("type") === "password" ? "text" : "password";
    PasswordField.setAttribute("type", type);
});




