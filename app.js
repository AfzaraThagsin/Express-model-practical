const express=require('express')
const app=express()
const UserPage=require('./user.js')
app.get('/',(req,res)=>{
    res.send("homepage")
})
app.use('/users',UserPage)
app.listen(3500)