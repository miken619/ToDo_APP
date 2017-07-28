const Sequelize = require('sequelize');

module.exports const db = new Sequelize(,{
  dialect: 'postgres'
});

console.log('Connected to db');

