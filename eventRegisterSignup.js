const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function(event) {
    // Call all validation functions and prevent submission if any validation fails
    let isValid = fNameHandler({ target: document.getElementById("fname") }) &&
        lNameHandler({ target: document.getElementById("lname") }) &&
        usernameHandler({ target: document.getElementById("username") }) &&
        pwdHandler({ target: document.getElementById("password") }) &&
        cpwdHandler({ target: document.getElementById("cpassword") }) &&
        dobHandler({ target: document.getElementById("dob") }) &&
        avatarHandler({ target: document.getElementById("profilephoto") });

    if (!isValid) {
        event.preventDefault();
    }
});

// Add event listeners for blur events for each field
document.getElementById("fname").addEventListener("blur", fNameHandler);
document.getElementById("lname").addEventListener("blur", lNameHandler);
document.getElementById("username").addEventListener("blur", usernameHandler);
document.getElementById("password").addEventListener("blur", pwdHandler);
document.getElementById("cpassword").addEventListener("blur", cpwdHandler);
document.getElementById("dob").addEventListener("blur", dobHandler);
document.getElementById("profilephoto").addEventListener("blur", avatarHandler);