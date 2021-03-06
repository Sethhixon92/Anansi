async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#exampleInputEmail').value.trim();
    const password = document.querySelector('#exampleInputPassword').value.trim();

    if (email && password) {
        const response = await fetch('/api/employees/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);