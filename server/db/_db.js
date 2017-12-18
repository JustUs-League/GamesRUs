const Sequelize = require('sequelize');

const databaseURI = 'postgres://localhost:5432/GamesRUs';
//don't forget to make the DB Dennis....
const db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  },
  logging: false
});

module.exports = db;
