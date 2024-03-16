'use strict';
const {
  Model
} = require('sequelize');
import bcryptjs from "bcryptjs"

const SALT_ROUND = 10;

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static async get(id) {w
      return id && (await Users.findByPk(id))
    }
  
    static async emailTaken(email) {
      return email && (await Users.findOne({ where: { userEmail: email } })) ? true : false
    }

    static async usernameTaken(username) {
      return username && (await Users.findOne({ where: { username: username } })) ? true : false
    }
  
    async checkPassword(password) {
      return (
        this.password !== null &&
        (await bcryptjs.compare(password, this.password))
      )
    }
  
    async setPassword(password) {
      this.password =
        password !== null && password !== undefined
          ? await bcryptjs.hash(password, SALT_ROUND)
          : null
    }

    static associate(models) {
      // define association here
    }
  }
  Users.init({
    userEmail: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};