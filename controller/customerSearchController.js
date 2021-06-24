
const db = require('../models/index')
const path = require('path')
module.exports = async (req, res) => {

    const { hotel_name, hotel_location, stars, room_type, check_in_date, check_out_date } = req.body;

    const hotelModel = db['HOTEL']
    const roomModel = db['ROOM']
    const reservationModel = db['RESERVATION']

    var searchQuery = "select HOTELs.hotel_name,HOTELs.hotel_location,HOTELs.telephone,HOTELs.email,HOTELs.stars,HOTELs.postal_code,HOTELs.type" +
        ",ROOMs.room_number,ROOMs.type,ROOMs.price" +
        ",RESERVATIONs.customer_username,RESERVATIONs.check_in_date,RESERVATIONs.check_out_date" +
        " from HOTELs"
    searchQuery += " inner join ROOMs on ROOMs.hotel_name=HOTELs.hotel_name and ROOMs.hotel_location=HOTELs.hotel_location"
    searchQuery += " inner join RESERVATIONs on RESERVATIONs.room_number=ROOMs.room_number and RESERVATIONs.hotel_name=ROOMs.hotel_name and RESERVATIONs.hotel_location=ROOMs.hotel_location"

        + " where 1=1 and HOTELs.approval=1";
    if (hotel_name != null && hotel_name != '')
        searchQuery += " and HOTELs.hotel_name='" + hotel_name + "'";
    if (hotel_location != null && hotel_location != '')
        searchQuery += " and HOTELs.hotel_location='" + hotel_location + "'";
    if (stars != null && stars != '')
        searchQuery += " and HOTELs.stars='" + stars + "'";
    if (room_type != null && room_type != '')
        searchQuery += " and HOTELs.room_type='" + room_type + "'";

    searchQuery += " ORDER BY check_out_date ASC"
    var selectedRooms = [];
    
    await db.sequelize.query(searchQuery, { model: hotelModel }).then(searchedRooms => {
        var last;
        if(searchedRooms){
       console.log(searchedRooms[0].dataValues.room_number)
        searchedRooms.forEach((element, index) => {
            if ( searchedRooms[index+1]!=undefined &&searchedRooms[index].dataValues.check_out_date < check_in_date ) {
                if (check_out_date < searchedRooms[index + 1].dataValues.check_in_date) {
                    selectedRooms.push(searchedRooms[index]);
                }
                last = index;
            }
            

        });
        if (check_out_date > searchedRooms[last].dataValues.check_out_date)
               selectedRooms.push(searchedRooms[last]);
        console.log(selectedRooms[0].dataValues.check_in_date+"  "+selectedRooms[0].dataValues.check_out_date);
        
    }
    res.render('RoomsView', { selectedRooms ,check_in_date,check_out_date});
    });

}