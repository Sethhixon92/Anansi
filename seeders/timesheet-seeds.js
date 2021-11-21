const { Timesheet } = require('../models');

const timesheetData =  [
    {
        project_name: "Working on plumbing",
        project_description: 'Leaky faucet needs to be sealed. Also need to make sure other pipes are not leaking',
        hours_worked: 6,
        employee_id: 1
    },
    {
        project_name: "Working on electrical",
        project_description: 'Customer tried to do his own wiring and almost burnt his house down',
        hours_worked: 12,
        employee_id: 2
    },
    {
        project_name: "Pest Control",
        project_description: 'Customer says they have an investation of cockroaches in their house',
        hours_worked: 8,
        employee_id: 3
    },
    {
        project_name: "Reshingle Roof",
        project_description: 'Fixing a customers roof after the crazy storm knocked out a few roof tiles',
        hours_worked: 14,
        employee_id: 4
    },
    {
        project_name: "Fixing broken lock",
        project_description: 'Customer said he got drunk and broke the lock of his front door',
        hours_worked: 3,
        employee_id: 5
    }
];

const seedsTimesheet = () => Timesheet.bulkCreate(timesheetData);

module.exports = seedsTimesheet;