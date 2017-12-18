const { STRING, TEXT, INTEGER } = require('sequelize');
const db = require('../_db');


const Review = db.define('review', {
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
      return this.getDataValue('rating')*2;
    }
  },
  gameId: {
    type: INTEGER,
    allowNull: false,
  },
});


// class methods
Review.getByGameId = (gameId) => {
  return Review.findAll({
    where: { gameId }
  });
};

Review.getByUserId = (userId) => {
  return Review.findAll({
    where: { userId }
  });
};

module.exports = Review;
