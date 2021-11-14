const Employee = require("./Employee");
const Timesheet = require("./Timesheet");
const Workday = require("./Workday");

// create associations
Employee.hasMany(Timesheet, {
  foreignKey: "employee_id"
});

Timesheet.belongsTo(Employee, {
  foreignKey: "employee_id",
  onDelete: "SET NULL"
});

Workday.belongsTo(Employee, {
  foreignKey: "employee_id",
  onDelete: "SET NULL"
});

Workday.belongsTo(Timesheet, {
  foreignKey: "timesheet_id",
  onDelete: "SET NULL"
});

Employee.hasMany(Workday, {
  foreignKey: "employee_id"
});

Timesheet.hasMany(Workday, {
  foreignKey: "timesheet_id",
  onDelete: "SET NULL"
});





module.exports = { Employee, Timesheet, Workday };
