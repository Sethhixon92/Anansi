const seedEmployees = require('./employee-seeds');
const seedComments = require('./comment-seeds');
const seedsTimesheet = require('./timesheet-seeds');
const pkg = require('../../package.json');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----/n');
  
    await seedEmployees();
    console.log('\n----- EMPLOYEES SEEDED -----/n');

    await seedComments();
    console.log('\n----- COMMENT SEEDED -----/n');

    await seedsTimesheet();
    console.log('\n----- TIMESHEETS SEEDED -----/n');

    process.exit(0);
};

seedAll();