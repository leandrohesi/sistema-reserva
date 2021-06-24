'use strict';
module.exports = (sequelize, DataTypes) => {
  const ROOM = sequelize.define('ROOM', {
    room_number: {
      type: DataTypes.INTEGER,
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
    type: DataTypes.STRING,
    price: DataTypes.FLOAT,
    available: DataTypes.BOOLEAN
  }, {});
  ROOM.associate = function (models) {
    ROOM.belongsTo(models.HOTEL, {
      foreignKey: 'hotel_name', targetKey: 'hotel_name',
      onDelete: 'cascade'
    });
    ROOM.belongsTo(models.HOTEL, {
      foreignKey: 'hotel_location', targetKey: 'hotel_location',
      onDelete: 'cascade'
    });
    // associations can be defined here
  };
  return ROOM
};