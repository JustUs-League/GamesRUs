const { STRING, TEXT, INTEGER } = require('sequelize');
const db = require('../_db');
const { User } = require('index')

const Review = db.define('review', {
  reviewId: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING,
    allowNull: false
  },
  message: {
    type: TEXT,
    allowNull: false,
  },
  rating: {
    type: INTEGER,
    allowNull: false,
    set(number){
      this.setDataValue('rating', number * 2);
    },
    get(){
      return this.getDataValue('rating') * 2;
    }
  },
  gameId: {
    type: STRING,
    allowNull: false,
  },
}, {
    defaultScope: {
      include: db.User,
    }
});


// class methods
Review.findByGameId = (gameId) => {
  return Review.findAll({
    where: { gameId }
  }, {
    include: [{ model: User}]
  });
};

Review.findByUserId = (userId) => {
  return Review.findAll({
    where: { userId }
  });
};

module.exports = Review;
