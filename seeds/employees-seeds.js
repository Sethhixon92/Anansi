const { Employees } = require('../models');

const employeesData = [
    {
        first_name: "Seth",
        last_name: 'Hixon',
        email: 'sethhixon@yahoo.com',
        password: 'CodingRocks!247'
    },
    {
        first_name: "Paul",
        last_name: 'Barcenas',
        email: 'paulbarcenas1234@yahoo.com',
        password: 'CodingRocks!248'
    },
    {
        first_name: "Ken",
        last_name: 'Ilochonwu',
        email: 'kenilochonwo2478@yahoo.com',
        password: 'CodingRocks!249'
    },
    {
        first_name: "Priti",
        last_name: 'Patel',
        email: 'pritipatel1234@yahoo.com',
        password: 'CodingRocks!2410'
    },
    {
        first_name: "David",
        last_name: 'Spires',
        email: 'davidspires8@yahoo.com',
        password: 'CodingRocks!2411'
    },
    {
        first_name: "Mary",
        last_name: 'Poppins',
        email: 'sithoverlordMary@yahoo.com',
        password: 'IAMASITH247!'
    }
];

const seedsEmployees = () => Employees.bulkCreate(employeesData);

module.exports =  seedsEmployess;