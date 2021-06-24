//check in for guests
//blacklist customers if didnt check in
//hotel info
//pay for broker
const path = require('path')

module.exports = async (req, res) => {
    var searchQuery = "select HOTELs.hotel_name,HOTELs.hotel_location,HOTELs.telephone,HOTELs.email,HOTELs.stars,HOTELs.postal_code,HOTELs.type"+
    ",ROOMs.room_number,ROOMs.type,ROOMs.price"+
    ",RESERVATIONs.check_in_date,RESERVATIONs.check_out_date"+ 
    " from HOTELs"
    searchQuery+=" inner join ROOMs on ROOMs.hotel_name=HOTELs.hotel_name and ROOMs.hotel_location=HOTELs.hotel_location"
    searchQuery+=" inner join RESERVATIONs on RESERVATIONs.room_number=ROOMs.room_number and RESERVATIONs.hotel_name=ROOMs.hotel_name and RESERVATIONs.hotel_location=ROOMs.hotel_location" 
        
    +" where 1=1 and HOTELs.approval=1";
   
    console.log('************************')
   const db = require('../models/index')
   const hotelModel = db['HOTEL']
   const customerModel = db['CUSTOMER']
   var commingCustomers = "";
   var customersMustCome = "";
    const hotel=await hotelModel.findOne({ where: {username : req.params.username}})
    var sql =  ("SELECT * FROM CUSTOMERs INNER JOIN RESERVATIONs ON CUSTOMERs.username = RESERVATIONs.customer_username AND RESERVATIONs.check_in_date = " + new Date().toISOString().slice(0,10));
    await db.sequelize.query(sql,{model:customerModel}).then(customers =>{
        commingCustomers = customers;
    })
    sql =  ("SELECT * FROM CUSTOMERs INNER JOIN RESERVATIONs ON CUSTOMERs.username = RESERVATIONs.customer_username AND RESERVATIONs.check_out_date = " + new Date().toISOString().slice(0,10));
    await db.sequelize.query(sql,{model:customerModel}).then(customers =>{
        customersMustCome = customers;
    })
        //console.log(hotel.hotel_name + " " + hotel.hotel_location)
        
        //render with the data
    //const customer = await customerModel.findAll({ where: { username: req.params.username } })
    
    const reservationModel=['RESERVATION']
    var searchQuery="SELECT RESERVATIONs.hotel_name,RESERVATIONs.hotel_location,RESERVATIONs.check_in_date,RESERVATIOns.check_out_date"+
    "inner join RESERVATIONs.hotel_name"
    
    res.render('HotelManagerPage', {hotel, commingCustomers, customersMustCome})
        
};