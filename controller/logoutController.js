module.export=(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
}