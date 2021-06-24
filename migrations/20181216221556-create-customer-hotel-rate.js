'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CUSTOMER_HOTEL_RATEs', {
     
      customer_username: {
        type: Sequelize.STRING
        
      },
      hotel_name: {
        type: Sequelize.STRING,
        
      },
      hotel_location: {
        type: Sequelize.STRING,
        
      },
      rate: {
        type: Sequelize.INTEGER
      },
      comment: {
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
    return queryInterface.dropTable('CUSTOMER_HOTEL_RATEs');
  }
};