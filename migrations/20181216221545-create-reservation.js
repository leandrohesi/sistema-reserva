'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RESERVATIONs', {
      
      customer_username: {
        type: Sequelize.STRING,
        
      },
      room_number: {
        type: Sequelize.INTEGER,
       
      },
      hotel_name: {
        type: Sequelize.STRING,
        
      },
      hotel_location: {
        type: Sequelize.STRING,
        
      },
      check_in_date: {
        type: Sequelize.DATEONLY
      },
      check_out_date: {
        type: Sequelize.DATEONLY
      },
      appear: {
        type: Sequelize.BOOLEAN
      },
      check_out_date_passed:{
        type: Sequelize.BOOLEAN 
      },
      payed_from_hotel_manager:{
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
    return queryInterface.dropTable('RESERVATIONs');
  }
};