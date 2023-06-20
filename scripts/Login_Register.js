
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
    var storedName = localStorage.getItem('name');
    var jsonArray = storedName ? JSON.parse(storedName) : [];
    jsonArray.push(username);
    localStorage.setItem('name', JSON.stringify(jsonArray));
    console.log(jsonArray);
});



