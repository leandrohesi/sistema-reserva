'use strict';
module.exports = (sequelize, DataTypes) => {
  const PAYMENT = sequelize.define('PAYMENT', {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    payment_date:{
      type:DataTypes.DATE,
      primaryKey: true
    },
    hotel_name: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    hotel_location: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    room_number: DataTypes.INTEGER,
    broker_username: DataTypes.STRING
  },{});
  PAYMENT.associate = function (models) {
    PAYMENT.belongsTo(models.ROOM, {
      foreignKey: 'hotel_name', targetKey: 'hotel_name',
      onDelete: 'cascade'
    });
    PAYMENT.belongsTo(models.ROOM, {
      foreignKey: 'hotel_location', targetKey: 'hotel_location',
      onDelete: 'cascade'
    });
    PAYMENT.belongsTo(models.ROOM, {
      foreignKey: 'room_number', targetKey: 'room_number',
      onDelete: 'cascade'
    });
    PAYMENT.belongsTo(models.BROKER, {
      foreignKey: 'broker_username', targetKey: 'username',
      onDelete: 'cascade'
    });
    // associations can be defined here
  };
  
  return PAYMENT;
};