const path = require('path')

module.exports = async (req, res) => {

    console.log('#########################################################')
   const db = require('../models/index')
   const hotelModel = db['HOTEL']

   hotelModel.destroy({where : {hotel_name : req.params.hotel_name, hotel_location : req.params.hotel_location}})
   res.redirect('/broker/broker')
    // await hotelModel.findOne({ where: {hotel_name : req.params.hotel_name, hotel_location : req.params.hotel_location}}).then(hotel => {

    //     console.log(hotel.hotel_name + " " + hotel.hotel_location)
    //     hotel.destroy({ force: true })
    //       res.redirect('/broker/broker')
    // })
   
};