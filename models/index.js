const Employee = require("./Employee");
const Timesheet = require("./Timesheet");

// create associations
Employee.hasMany(Timesheet, {
  foreignKey: "employee_id"
});

Timesheet.belongsTo(Employee, {
  foreignKey: "employee_id",
  onDelete: "SET NULL"
});

module.exports = { Employee, Timesheet };
