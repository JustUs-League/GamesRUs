const { STRING, BOOLEAN, INTEGER }= require('sequelize');
const crypto = require('crypto');
const db = require('../_db');
const { Order, Review} = require('../index')


const User = db.define('user', {
  userId: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  phone: STRING,
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  isAdmin: {
    type: BOOLEAN,
    default: false,
  },
  password: STRING,
  salt: STRING,
},{
  defaultScope: {
    attributes: ['name', 'isAdmin', 'userId', 'phone', 'email'],
  },
  scopes:{
    withOrders: {
      include: [{
        model: Order,
      }]
    },
    withReview: {
      include: [{
        model: Review,
      }]
    },
    withAll: {
      include: [
      { model: Order },
      { model: Review }
      ],
      attributes: ['name', 'isAdmin', 'userId', 'phone', 'email '],
    },
    justReviewInfo: {
      attributes: ['name', 'userId']
    }
  },
});


// instance method to check if password is correct
User.prototype.correctPassword = function(potentialPassword) {
  return User.encryptPassword(potentialPassword, this.salt) === this.password;
};

// class method
User.encryptPassword = (password, salt) => {
  return crypto.createHash('sha1').update(password).update(salt).digest('hex');
}

User.generateSalt = () => {
  return crypto.randomBytes(16).toString('base64');
}


const setSaltAndPassword = (user) => {
  if (user.changed('password')){
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password, user.salt);
  }
}


User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);


module.exports = User;

