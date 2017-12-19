const { ENUM, STRING, INTEGER } = require('sequelize');
const db = require('../_db');

const Order = db.define('order', {
  orderId: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: ENUM('CREATED', 'PROCESSING', 'COMPLETED', 'CANCELLED'),
  email: {
    type: STRING,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  city: {
    type: STRING,
    allowNull: false,
  },
  street: {
    type: STRING,
    allowNull: false,
  },
  state: {
    type: STRING,
    allowNull: false,
  },
  zip: {
    type: STRING,
    allowNull: false,
  },
  total: {
    type: STRING,
    allowNull: false,
  }
}, {
  scopes: {
    withItems: {
      include: [{ model: db.OrderItem }]
    }
  }
})

module.exports = Order;
