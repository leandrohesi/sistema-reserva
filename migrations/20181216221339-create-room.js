'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ROOMs', {
     
      room_number: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false
      },
      hotel_name: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
        
      },
      hotel_location: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
        
      },
      type: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      available: {
        type: Sequelize.BOOLEAN,
        default : 1 
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
    return queryInterface.dropTable('ROOMs');
  }
};