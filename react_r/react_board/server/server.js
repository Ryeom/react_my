const express = require('express')
const path = require('path')
const os = require('os')
const router = require('./route')

const app = express()
const PORT = process.env.PORT||3002

const morgan = require('morgan')

app.use(express.static(path.join(__dirname,'..','public/')))
app.use('/',router)

app.get('/api/getUsername',(req,res,next)=>{
    res.send({username:os.userInfo().username})
})
app.use(morgan('combined'))

app.listen(PORT,()=>{
    console.log(`now listening port ${PORT}`);
})

