
// var users = JSON.parse(localStorage.getItem('name')) || []
// var userData = [{ Username: document.getElementById("name").value }]


// users.push(userData)
// var res = localStorage.setItem('name', JSON.stringify(users))
// console.log(users)
// console.log(userData)
// console.log(res)

document.getElementById("form-field").addEventListener("submit", (event) => {
    event.preventDefault();
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var noTLP = document.getElementById('tlp').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    var error = document.getElementById("error");
    var storedData = localStorage.getItem('userData');

    var jsonArray = storedData ? JSON.parse(storedData) : []

    var user = {
        name: username,
        email: email,
        noTLP: noTLP,
        password: password,
        confirm: confirm,
    }

    if (!username || !email || !noTLP || !password || !confirm) {
        console.log("ISI ANJIR")
        error.textContent = "Field is required";
        error.style.cssText = "color: red; font-size: 1vw;";
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

    jsonArray.push(user);
    localStorage.setItem('userData', JSON.stringify(jsonArray));
    console.log(jsonArray);



});



