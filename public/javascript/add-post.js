async function newFormHandler(event) {
    event.preventDefault();

    const project_name = document.querySelector('#formControlInput3').value;
    const project_description = document.querySelector('#formControlTextarea5').value.trim();
    const hours_worked = document.querySelector('#formControlInput4').value.trim();

    const response = await fetch(`/api/timesheets`, {
        method: 'POST',
        body: JSON.stringify({
            project_name,
            project_description,
            hours_worked
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

