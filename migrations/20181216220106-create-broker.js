'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BROKERs', {
      
      name: {
        type: Sequelize.STRING
      },
      credit: {
        type: Sequelize.FLOAT
      },
      username: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BROKERs');
  }
};