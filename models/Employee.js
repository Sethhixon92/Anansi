const { Model, DataTypes } = require('sequelize');
// npm install bcrypt to hash passwords
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class Employee extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// create fields/columns for User model
Employee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // password must be at least 4 characters in length
          len: [4]
        }
      }
    },
    {
      hooks: {
        // set up beforeCreate lifecycle "hook" functionality
        // this will create hash password 
        //e.g "$2b$10$Gg63MLJYlRMPI0s4f09YCu13Oq5okQJQb/zaHazWmGmRNxqnbX6qK"
        async beforeCreate(newUserData) {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
  
        async beforeUpdate(updatedUserData) {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        }
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'employee'
    }
  );
  
  module.exports = Employee;