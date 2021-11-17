const seedsEmployees = require('./employees-seeds');
const seedsComment = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----/n');
    await seedsEmployees();
    console.log('\n----- DATABASE SYNCED -----/n');

    // await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----/n');
    await seedsComment();
    console.log('\n----- DATABASE SYNCED -----/n');
}

seedAll()