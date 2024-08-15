async function filterUsers() {
    const userCount = document.getElementById('userCount').value;
    const ageLimit = document.getElementById('ageLimit').value;
    const userContainer = document.getElementById('userContainer');

    try {
        const response = await fetch(`https://dummyjson.com/users?limit=${userCount}`);
        const data = await response.json();
        const filteredUsers = data.users.filter(user => user.age <= ageLimit);

        userContainer.innerHTML = '';
        filteredUsers.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.innerHTML = `
                <h2>${user.firstName} ${user.lastName}</h2>
                <p>Age: ${user.age}</p>
                <p>Email: ${user.email}</p>
            `;
            userContainer.appendChild(userDiv);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
