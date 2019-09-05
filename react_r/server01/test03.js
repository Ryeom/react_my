const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const bodyParser = require('koa-bodyparser')    //
//#######################################################################################
//TODO
//yarn add koa koa-router koa-bodyparser query-string mongoose --save
router.get('/',(ctx)=>{
    ctx.body = '<h1>하희!</h1>'
    console.log(`하희!`)
})

router.post('/app',(ctx)=>{
    console.log(`ㅎㅇㅎㅇ`,ctx.request.body);
    //const {name , age} = ctx.request.body
})





//#######################################################################################
app.use(bodyParser())       //body이거 제일 위로 올려라아아악!
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(4000,()=>{
    console.log(`port 4000 listen 깔깔`)
})

