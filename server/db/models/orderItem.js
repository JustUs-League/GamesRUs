const { STRING, INTEGER } = require('sequelize');
const db = require('../_db');


const orderItem = db.define('orderItem', {
  orderItemId: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productId: {
    type: STRING,
    allowNull: false,
  },

})


module.exports = orderItem;
