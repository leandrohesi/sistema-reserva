const path = require('path')
module.exports = (req, res) => {
    const { username, password,accountType } = req.body;
  
  // res.sendFile(path.resolve(__dirname,"../views/RegistrationForm.html"))
    res.render('RegistrationForm',{
      errors:req.flash('registrationErrors')    
    })
   // res.sendFile(path.resolve(__dirname, '../views/RegistrationForm.html'))
    
};