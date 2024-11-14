document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents immediate submission

    // Collect form data
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Display a summary of form data
    let formSummary = `Please review your details:\n\n` +
                      `First Name: ${firstName}\n` +
                      `Last Name: ${lastName}\n` +
                      `Email: ${email}\n` +
                      `Telephone: ${telephone}\n` +
                      `Password: ${'*'.repeat(password.length)}\n` + // Masks password
                      `Confirm Password: ${'*'.repeat(confirmPassword.length)}`;

    alert(formSummary);

    // Show confirmation alert
    if (confirm("Are you sure you want to sign up with these details?")) {
        alert("Sign-up confirmed! Your information has been submitted.");
        this.submit(); // Proceed with form submission
    } else {
        alert("Sign-up canceled.");
    }
});