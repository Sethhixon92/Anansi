// async function editFormHandler(event) {
//     event.preventDefault();
  
//     const project_name = document.querySelector('input[name="timesheet-project_name"]').value.trim();
//     const timesheet_id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
//     const response = await fetch(`/api/timesheets/${timesheet_id}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         project_name
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard/');
//     } else {
//       alert(response.statusText);
//     }
//   }
  
//   document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  


// async function editFormHandler(event) {
//     event.preventDefault();

//     const project_name = document.querySelector('#formControlInput6').value.trim();
//     const project_description = document.querySelector('#formControlTextarea8').value.trim();
//     const hours_worked = document.querySelector('#formControlInput7').value.trim();
//     const timesheet_id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     const response = await fetch(`/api/timesheets/${timesheet_id}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//             project_name,
//             project_description,
//             hours_worked
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace('/dashboard/');
//     } else {
//         alert(response.statusText);
//     }
// }

// document.querySelector('.edit-timesheet-form').addEventListener('submit', editFormHandler);