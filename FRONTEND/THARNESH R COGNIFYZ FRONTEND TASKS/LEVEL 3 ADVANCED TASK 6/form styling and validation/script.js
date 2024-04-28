document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (name.trim() === '') {
        showAlert('Name is required');
    } else if (!isValidEmail(email)) {
        showAlert('Please enter a valid email address');
    } else if (password.length < 8) {
        showAlert('Password must be at least 8 characters long');
    } else {
        alert('Form submitted successfully!');
    }
});
function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function showAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert';
    alertDiv.appendChild(document.createTextNode(message));
    document.querySelector('.container').insertBefore(alertDiv, document.getElementById('myForm'));
    setTimeout(function() {
        alertDiv.remove();
    }, 3000);
}
