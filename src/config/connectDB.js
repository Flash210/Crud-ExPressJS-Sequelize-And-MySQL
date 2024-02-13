const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

// Create a new Sequelize instance with the specified credentials
const sequelize = new Sequelize('nodecrud', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // or any other supported dialect such as 'postgres', 'sqlite', etc.,
  logging: false,
  port: 3307,
  
});

const connectToDataBase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {sequelize,connectToDataBase}; 
