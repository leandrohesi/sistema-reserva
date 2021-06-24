'use strict';
// const bcrypt=require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const HOTEL_OWNER = sequelize.define('HOTEL_OWNER', {
    name: DataTypes.STRING,
    ssn: DataTypes.INTEGER,
    telephone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    username:{
      type:DataTypes.STRING,
      primaryKey:true
    } ,
    password: DataTypes.STRING
  }, {});
  // HOTEL_OWNER.beforeCreate((owner,options)=>{
  //   return bcrypt.hash(owner.password,100,(error,encrypted)=>{
  //     user.password=encrypted
  //   })
  // })
  HOTEL_OWNER.associate = function(models) {
    // associations can be defined here
  };
  return HOTEL_OWNER;
};