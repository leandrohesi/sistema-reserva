'use strict';
module.exports = (sequelize, DataTypes) => {
  const RESERVATION = sequelize.define('RESERVATION', {
    
    room_number: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    customer_username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    hotel_name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    hotel_location: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    check_out_date_passed:{
      type: DataTypes.BOOLEAN 
    },
    payed_from_hotel_manager:{
      type: DataTypes.BOOLEAN   
    },
    check_in_date:{ 
      type:DataTypes.DATE,
      primaryKey: true
    },
    check_out_date: DataTypes.DATE,
    appear: DataTypes.BOOLEAN
  }, {});
  RESERVATION.associate = function (models) {
    RESERVATION.belongsTo(models.CUSTOMER, {
      foreignKey: 'customer_username', targetKey: 'username',
      onDelete: 'cascade'
    })
    RESERVATION.belongsTo(models.ROOM, {
      as: 'hotel_name_foreignkey',
      foreignKey: 'hotel_name', targetKey: 'hotel_name',
      onDelete: 'cascade'
    })
    RESERVATION.belongsTo(models.ROOM, {
      as: 'hotel_location_foreignkey',
      foreignKey: 'hotel_location', targetKey: 'hotel_location',
      onDelete: 'cascade'
    })
    RESERVATION.belongsTo(models.ROOM, {
      foreignKey: 'room_number', targetKey: 'room_number',
      onDelete: 'cascade'
    });
   
    // associations can be defined here
  };

  return RESERVATION;
};