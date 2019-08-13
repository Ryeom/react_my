const express = require('express')
const os = require('os')
const router = express.Router()
const mysql = require('../databaseConnection')

router.get('/api/getUsername',(req,res,next)=>{
    res.send({username:os.userInfo().username})
})


router.get('/getData',(req,res)=>{
    mysql.query(`select * from member_tb`,(err,rows)=>{
        if(!err){
            console.log(`hi! mysql`);
            res.send(rows)
        }else {
            console.log(`err`)
            res.send(errs)
        }
    })
})

module.exports = router