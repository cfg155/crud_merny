'use strict';

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
    await queryInterface.bulkInsert('posts', [
      {
        id: '8b6ffabb-e9bb-4479-b3d1-96ca08ff3075',
        user_id: '4e5508fd-979d-47ad-a56b-e9a604d02f1f',
        title: 'Hello world',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis ante eu est congue fringilla. Etiam nec nisi feugiat, feugiat urna eu, laoreet erat. Sed non dolor nec enim facilisis ullamcorper. Suspendisse congue nisi in nisi sollicitudin tempus. Ut pellentesque eget urna interdum efficitur. Duis purus erat, rutrum quis eleifend aliquam, pellentesque at nisl. Nunc bibendum bibendum magna ac auctor. Vestibulum nisi risus, condimentum et metus vel, suscipit cursus quam. Ut luctus ex nec purus lacinia, vitae accumsan purus volutpat.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7c51f90c-2b47-4368-98e0-b8a242136ca0',
        user_id: '4e5508fd-979d-47ad-a56b-1ff4f2a714f8',
        title: 'Ut pharetra dolor ac ultricies gravida',
        body: 'Ut pharetra dolor ac ultricies gravida. Etiam non lectus vel ligula tempor euismod. Etiam sem quam, molestie ac malesuada in, consectetur vitae erat. Nullam lacus nibh, ullamcorper in ornare a, gravida sit amet libero. Sed sollicitudin ornare neque, quis sollicitudin erat blandit at. Nam bibendum pharetra nibh, at pulvinar felis malesuada id. Morbi non dui lectus. Nulla facilisi. Phasellus facilisis mauris sagittis egestas mattis. Maecenas ligula ipsum, fermentum a laoreet et, dignissim sit amet dui. Etiam quis nunc at eros hendrerit vestibulum ac et quam. Proin aliquam lorem ac felis fermentum eleifend. Sed ipsum dolor, tincidunt ut quam non, facilisis feugiat nisl. Fusce in magna porttitor, varius magna et, fringilla quam. Nam feugiat quis ligula nec posuere.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5cbf529f-07a0-4f1c-b696-5410565ab716',
        user_id: '4e5508fd-979d-47ad-a56b-e9a604d02f1f',
        title: 'Nulla et diam in nisi elementum rhoncus',
        body: 'Nulla et diam in nisi elementum rhoncus. Praesent nunc arcu, tincidunt a euismod vitae, mattis in ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus dolor arcu, maximus quis neque eu, pharetra sollicitudin massa. Pellentesque sed lorem blandit elit condimentum euismod in at velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque vel elementum nisi. Proin mattis, libero quis facilisis posuere, mauris nisl accumsan risus, sit amet commodo leo elit ac leo.',
        createdAt: new Date(),
        updatedAt: new Date(),
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
    await queryInterface.bulkDelete('posts', null, {});
  },
};
