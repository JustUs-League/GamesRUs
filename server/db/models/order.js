const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type:   Sequelize.ENUM,
    values: ['active', 'pending', 'complete', 'canceled'],
    allowNull: false,
    defaultValue: 'active'
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true
  },
  street: {
    type: Sequelize.STRING,
    allowNull: true
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Order
