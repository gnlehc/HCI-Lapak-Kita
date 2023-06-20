document.getElementById("form-login").addEventListener("submit", (event) => {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var error = document.getElementById("error");
    var account = localStorage.getItem('user');
    if (account) {
        var users = JSON.parse(account);
        var foundUser = users.find(user => user.email === email && user.password === password);
        if (foundUser) {
            window.location.href = '/View/Home.html';
            return;
        }
    }
    error.textContent = "Invalid email or password.";
    return
});

const showPassword = document.querySelector('#show-password');
const passwordField = document.querySelector('#password');
showPassword.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});