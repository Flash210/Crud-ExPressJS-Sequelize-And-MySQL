const { sequelize } = require("../config/connectDB");
const { DataTypes } = require("sequelize");

const Todo = sequelize.define("Todo", {
  content: {
    type: DataTypes.STRING,
    validate: {
      max: 150,
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
    isCompleted: {
        type: DataTypes.BOOLEAN,
    },


});


module.exports = Todo;