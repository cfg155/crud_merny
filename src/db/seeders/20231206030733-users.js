'use strict';

const { encryptPayload } = require('../../utils/encrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('users', [
      {
        id: '4e5508fd-979d-47ad-a56b-e9a604d02f1f',
        username: 'admin1',
        password: encryptPayload('password'),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: '4e5508fd-979d-47ad-a56b-1ff4f2a714f8',
        username: 'admin2',
        password: encryptPayload('password'),
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
