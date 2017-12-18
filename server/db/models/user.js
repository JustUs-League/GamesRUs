const { STRING, BOOLEAN }= require('sequelize');
const crypto = require('crypto');
const db = require('../_db');


const User = db.define('user', {
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
  isAdmin: BOOLEAN,
  password: STRING,
  salt: STRING,
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

