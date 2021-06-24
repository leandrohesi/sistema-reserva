'use strict';
module.exports = (sequelize, DataTypes) => {
  const CUSTOMER_HOTEL_RATE = sequelize.define('CUSTOMER_HOTEL_RATE', {
    customer_username: {
      type: DataTypes.STRING,
      primaryKey: true,
      references:{
        model:'CUSTOMERs',
        key:'customer_username'
      }
    },
    hotel_name: {
      type: DataTypes.STRING,
      primaryKey: true,
      references:{
        model:'HOTELs',
        key:'hotel_name'
      }
    },
    hotel_location: {
      type: DataTypes.STRING,
      primaryKey: true,
      references:{
        model:'HOTELs',
        key:'hotel_location'
      }
    },
    rate: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  CUSTOMER_HOTEL_RATE.associate = function (models) {
    
    
    // var sql = "ALTER TABLE CUSTOMER_HOTEL_RATEs "+
    // "ADD CONSTRAINT FK_HOTEL_RATES_HOTELs"+
    // " FOREIGN KEY(hotel_name,hotel_location) REFERENCES HOTELs(hotel_name,hotel_location)"+
    // " on delete cascade on update cascade";
    // var sql1="ALTER TABLE CUSTOMER_HOTEL_RATEs ADD FOREIGN KEY (customer_username) REFERENCES CUSTOMERs(customer_username)"+
    // " on delete cascade on update cascade";
    //sequelize.query(sql);
    //sequelize.query(sql1);
  
  };
  return CUSTOMER_HOTEL_RATE;
};