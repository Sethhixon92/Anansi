const seedEmployees = require('./employees-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----/n');

    await seedEmployees();
    console.log('\n----- DATABASE SYNCED -----/n');

    await seedTimesheets();
    console.log('\n----- DATABASE SYNCED -----/n');
    
    await seedComments();
    console.log('\n----- DATABASE SYNCED -----/n');

    process.exit(0);
};

