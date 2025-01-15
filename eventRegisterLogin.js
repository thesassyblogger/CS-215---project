var form = document.getElementById("login-form");
form.addEventListener("submit", function(event) {
    let isValid = validateLogin(event); // Ensure validateLogin is defined in eventhandlers.js
    if (!isValid) {
        event.preventDefault();
    }
});

const usernameInput = document.getElementById('username');
usernameInput.addEventListener('blur', usernameHandler); // Ensure usernameHandler is defined in eventhandlers.js

const passwordInput = document.getElementById('password');
passwordInput.addEventListener('blur', pwdHandler);