document.addEventListener("DOMContentLoaded", function() {
    fetchUsers();
});
function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        displayUsers(users);
    })
    .catch(error => console.log('Error fetching users: ', error));
}
function displayUsers(users) {
    const leftUserList = document.getElementById('left-user-list');
    const rightUserList = document.getElementById('right-user-list');   
    users.forEach((user, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Name:</strong> ${user.name} <br>
            <strong>Email:</strong> ${user.email} <br>
            <strong>Phone:</strong> ${user.phone} <br>
            <strong>Website:</strong> ${user.website}
        `;
        if (index % 2 === 0) {
            leftUserList.appendChild(listItem);
        } else {
            rightUserList.appendChild(listItem);
        }
    });
}