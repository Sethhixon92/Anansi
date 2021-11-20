const seedsEmployees = require('./employees-seeds');
const seedsComment = require('./comment-seeds');
const seedsTimesheet = require('./timesheet-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----/n');
    await seedsEmployees();
    console.log('\n----- EMPLOYEES SEEDED -----/n');

    await seedsComment();
    console.log('\n----- COMMENT SEEDED -----/n');

    await seedsTimesheet();
    console.log('\n----- TIMESHEETS SEEDED -----/n');

    process.exit(0);
};

seedAll();