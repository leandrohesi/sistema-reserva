const path = require('path')

module.exports = async (req, res) => {

    console.log('************************')
  const db = require('../models/index')
   const HotelOwnerModel = db['HOTEL_OWNER']
   const HotelModel = db['HOTEL']

   const hotelOwner = await HotelOwnerModel.findOne({ where: {username : req.params.username}})
   const hotelOwnerHotels = await HotelModel.findAll({where : {hotel_owner_username : req.params.username}})
   res.render('HotelOwnerPage', {hotelOwner, hotelOwnerHotels})
   
};