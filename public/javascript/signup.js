async function signupFormHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#exampleInputFirstName').value.trim();
    const last_name = document.querySelector('#exampleInputLastName').value.trim();
    const email = document.querySelector('#exampleInputEmail1').value.trim();
    const password = document.querySelector('#exampleInputPassword1').value.trim();

    if (first_name && last_name && email && password) {
        console.log(first_name);
        const response = await fetch('/api/employees', {
            method: 'post',
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);