const db=require('../models/index')

module.exports=(req,res,next)=>{
    db[req.body.selectedType].findOne({ where: { username : req.body.username } }).then(user => {
        if (user) {
                res.redirect('/register')
        }
            //redirect to home -->Password is wrong
            else {
                next()
            }
    })
}
