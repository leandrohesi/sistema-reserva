'use strict';
//const bcrypt  = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const CUSTOMER = sequelize.define('CUSTOMER', {
    name: DataTypes.STRING,
    ssn: DataTypes.INTEGER,
    telephone:DataTypes.STRING,
    email: DataTypes.STRING,
    credit_card: DataTypes.STRING,
    star_member: DataTypes.BOOLEAN,
    username:{
      type:DataTypes.STRING,
      primaryKey:true
    } ,
    password: DataTypes.STRING,
    blacklist: DataTypes.BOOLEAN
  }, {});
  // CUSTOMER.beforeCreate((customer,options)=>{
  //   return bcrypt.hash(customer.password,100,(error,encrypted)=>{
  //     user.password=encrypted
  //   })
  // })
  CUSTOMER.associate = function(models) {
    // associations can be defined here
  };
  return CUSTOMER;
};