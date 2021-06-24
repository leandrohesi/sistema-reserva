'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PAYMENTs', {
  
      payment_id: {
        type: Sequelize.INTEGER,
        unique:false
        
      },
      payment_date:{
        type:Sequelize.DATE,
        unique:false
      },
      hotel_name: {
        type: Sequelize.STRING,
        
      },
      hotel_location: {
        type: Sequelize.STRING,
        
      },
      room_number: {
        type: Sequelize.INTEGER
      },
      broker_username: {
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
    return queryInterface.dropTable('PAYMENTs');
  }
};