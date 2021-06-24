const path = require('path')
module.exports = (req, res) => {
    const { username, password,accountType } = req.body;
  
    //res.render('register')
    res.render('LoginForm',{
        error:req.flash('loginError')
    })
    
};