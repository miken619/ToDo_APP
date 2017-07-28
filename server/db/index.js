const Sequelize = require('sequelize');
const db = require('./config');

const List = db.define('list', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Entry = db.define('list', {
  errand: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

//List.hasMany(Entry, { foreignKey: { name: 'list_id', allowNull: ture }, onDelete: 'CASCADE' });
//Entry.belongsTo(List, { foreignKey: { name: 'list_id', allowNull: ture }, onDelete: 'CASCADE' });

List.sync();
Entry.sync();

module.exports = {
  List,
  Entry
};