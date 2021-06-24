const db=require('../models/index')
module.exports=(req,res,next)=>{
    db[req.body.selectedType].findOne({where:{
        username:req.session.username
    }}).then((error,user)=>{
        if(error||!user)
            res.redirect('/login')
    })
}