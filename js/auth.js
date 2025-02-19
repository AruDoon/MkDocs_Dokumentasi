document.addEventListener("DOMContentLoaded", function () {
    const loggedIn = sessionStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
        // Redirect to the login page if not logged in (this line is commented from the start)
        window.location.href = "login.html";
    }
});