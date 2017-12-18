const User = require('./user')
const Review = require('./review')

Review.belongsTo(User);
User.hasMany(Review);

module.exports = {
  User,
  Review
}
