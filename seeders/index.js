<<<<<<< HEAD:seeds/index.js
const seedEmployees = require('./employee-seeds');
const seedComments = require('./comment-seeds');
=======
const seedsEmployees = require('./employees-seeds');
const seedsComment = require('./comment-seeds');
const seedsTimesheet = require('./timesheet-seeds');
>>>>>>> feature/seeds:seeders/index.js

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----/n');
<<<<<<< HEAD:seeds/index.js

    await seedEmployees();
    console.log('\n----- DATABASE SYNCED -----/n');

    await seedTimesheets();
    console.log('\n----- DATABASE SYNCED -----/n');
    
    await seedComments();
    console.log('\n----- DATABASE SYNCED -----/n');
=======
    await seedsEmployees();
    console.log('\n----- EMPLOYEES SEEDED -----/n');

    await seedsComment();
    console.log('\n----- COMMENT SEEDED -----/n');

    await seedsTimesheet();
    console.log('\n----- TIMESHEETS SEEDED -----/n');
>>>>>>> feature/seeds:seeders/index.js

    process.exit(0);
};

seedAll();