const path = require('path')

module.exports = async (req, res) => {

    console.log('************************')
   const db = require('../models/index')
   const BrokerModel = db['BROKER']
   const hotelModel = db['HOTEL']
   const customerModel = db['CUSTOMER'] 


   const broker =  await BrokerModel.findOne({ where: {username : req.params.username}})
   const approvedHotels = await hotelModel.findAll({where: {approval:1}})
   const unapprovedHotels = await hotelModel.findAndCountAll({where: {approval:0}})
   const customers = await customerModel.findAll()
//console.log(unapprovedHotels.count);
   res.render('BrokerHomePage', {broker, approvedHotels, unapprovedHotels, customers})
   
};