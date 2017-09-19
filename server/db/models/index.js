const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const LineItem = require('./lineitem')
const Review = require('./review')

Review.belongsTo(User) //userId will be added on Review source model
Review.belongsTo(Product) //productId will be added on Review source model

Product.hasMany(Review, {onDelete: 'CASCADE'})

LineItem.belongsTo(Order) //orderId will be added on LineItem source model
LineItem.belongsTo(Product) //productId will be added on LineItem source model

Order.hasMany(LineItem, {onDelete: 'CASCADE'})
Order.belongsTo(User)

module.exports = {
  User,
  Review,
  LineItem,
  Order,
  Product
}
