const path = require('path')

module.exports = (req, res) => {

    
   const db = require('../models/index')
   
   const { username,name,ssn,email,telephone,password,credit} = req.body;
   console.log("GSDGSDG");
   console.log(username+ ' ' + name+ ' ' + ssn+ ' ' + email+ ' ' + telephone+ ' ' + password + ' ' + credit + req.body.password)
   
   const UserModel = db[req.body.selectedType]

   UserModel.create(req.body).then(user => {
    
    console.log(user);
    
    // you can now access the newly created task via the variable task
    res.redirect('/')
  }).catch((error)=>{

    const registrationErrors=Object.keys(error.errors).map(key=>error.errors[key].message)
    //saving the errors for the next request only
    req.flash('registrationErrors',registrationErrors)
    res.redirect('/register')


  })

   
};