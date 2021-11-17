const seedsEmployees = require('./employees-seeds');
const seedsComment = require('./comment-seeds');
const seedsTimesheet = require('./timesheet-seeds');

const sequelize = require('../config/connection');
const { Sequelize } = require('sequelize/types');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----/n');
    await seedsEmployees();
    console.log('\n----- DATABASE SYNCED -----/n');

    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----/n');
    await seedsComment();
    console.log('\n----- DATABASE SYNCED -----/n');

    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----/n');
    await seedsTimesheet();
    console.log('\n----- DATABASE SYNCED -----/n');
}