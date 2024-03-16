'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const bcryptjs = require("bcryptjs")
    const SALT_ROUND = 10; 

    return queryInterface.bulkInsert('Users', [{
      userEmail: 'admin@dacoinx.io',
      username: 'admin',
      password:  await bcryptjs.hash('admin', SALT_ROUND),
      phone: '+12055885568',
      isVerified: true,
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
