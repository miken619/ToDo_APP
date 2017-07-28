const Sequelize = require('sequelize');

module.exports const db = new Sequelize('postgres://dzthhgqs:ZtspT5KBYPRKn_7MWc1hxgAWUPod9Qfj@babar.elephantsql.com:5432/dzthhgqs',{
  dialect: 'postgres'
});

console.log('Connected to db');

