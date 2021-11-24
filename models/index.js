const Employee = require("./Employee");
const Timesheet = require("./Timesheet");
const Comment = require("./Comment");



// create associations
Employee.hasMany(Timesheet, {
 foreignKey: "employee_id"
});

Timesheet.belongsTo(Employee, {
 foreignKey: "employee_id",
 onDelete: "SET NULL"
});

Comment.belongsTo(Employee, {
 foreignKey: "employee_id",
 onDelete: "SET NULL"
});

Comment.belongsTo(Timesheet, {
 foreignKey: "timesheet_id",
 onDelete: "SET NULL"
});

Employee.hasMany(Comment, {
 foreignKey: "employee_id"
});

Timesheet.hasMany(Comment, {
 foreignKey: "timesheet_id",
 onDelete: "SET NULL"
});





module.exports = { Employee, Timesheet, Comment };