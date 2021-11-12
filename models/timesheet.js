const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


// create our Post model
class Timesheet extends Model {}

// create fields/columns for Post model
Timesheet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    workdays: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "employee",
        key: "id"
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "timesheet"
  }
);

module.exports = Timesheet;