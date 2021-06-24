const path = require('path')
const db = require('../models/index')
module.exports =async (req, res) => {
   
    const {hotel_name,hotel_location,stars,telephone,email,postal_code,room_number,price,check_in_date, check_out_date,customer_username } = req.body; 
    console.log(check_in_date+" "+check_out_date +"\n")
  const reservationModel = db['RESERVATION']

    const insertReservationQuery="INSERT INTO RESERVATIONs(customer_username,room_number,hotel_name,hotel_location,check_in_date,check_out_date) VALUES("+"'"+customer_username+"',"+"'"+room_number+"',"+"'"+hotel_name+"',"+"'"+hotel_location+"',"+"'"+check_in_date+"',"+"'"+check_out_date+"')";
     await db.sequelize.query(insertReservationQuery, { model: reservationModel });
     
    
};