const path = require('path')

module.exports = async (req, res) => {

    console.log('************************')
    const db = require('../models/index')
    //customerModel =  require('../models').CUSTOMER
    const customerModel = db['CUSTOMER']
    const reservationModel = db['RESERVATION']
    const customer = await customerModel.findOne({ where: { username: req.params.username } })
    const reservations = await reservationModel.findAll({ where: { customer_username: req.params.username } })
    res.render('customerHomePage',{customer,reservations})
};