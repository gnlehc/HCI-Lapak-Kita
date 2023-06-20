function handleCredentialResponse(response) {
    var id_token = response.credential;
    window.location.href = "/View/Home.html";
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id:
            "1060515001003-lhh7a6kp5lre8guk146n61l4h8t562do.apps.googleusercontent.com",
        callback: handleCredentialResponse,
    });
    google.accounts.id.prompt();
};

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.

    // $("#name").text(profile.getName())
    // $("#email").text(profile.getEmail())
    // $("#image").attr('src', profile.getImageUrl())
    // $(".data").css("display", "block")
    // $(".g-signin2").css("display", "none")

}
app.use(function (req, res, next) {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    next();
});
