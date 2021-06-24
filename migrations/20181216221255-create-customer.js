'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CUSTOMERs', {
     
      name: {
        type: Sequelize.STRING
      },
      ssn: {
        type: Sequelize.STRING
      },
      telephone:{
        type:Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      credit_card: {
        type: Sequelize.STRING
      },
      star_member: {
        type: Sequelize.BOOLEAN
      },
      username: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING
      },
      blacklist: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('CUSTOMERs');
  }
};