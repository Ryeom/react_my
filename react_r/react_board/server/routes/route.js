const express = require('express')
const os = require('os')
const router = express.Router()
const mysql = require('../databaseConnection')


router.get('/api/getUsername', (req, res, next) => {
    res.send({
        username: os.userInfo().username
    })
})


router.get('/member', (req, res) => {
    console.log('ㅎㅇ');
    
    mysql.query(`select * from member_tb`, (err, rows) => {
        if (!err) {
            console.log(`hi! mysql`, rows);
            
            //console.log(rows);
            
            res.send(rows)
            
        } else {
            console.log(`err`)
            res.send(err)
        }
    })
})



module.exports = router