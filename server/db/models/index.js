const User = require('./user');
const Review = require('./review');
const Order = require('./order');
const OrderItem = require('./orderItem')


Review.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Review, { foreignKey: 'userId' });

Order.hasMany(OrderItem, { foreignKey: 'orderId'});
OrderItem.belongsTo(Order, {foreignKey: 'orderId'});

Order.belongsTo(User, { foreignKey: 'userId'});
User.hasMany(Order, { foreignKey: 'userId'});

module.exports = {
  User,
  Review,
  Order,
  OrderItem,
}
