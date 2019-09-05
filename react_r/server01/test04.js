const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const bodyParser = require('koa-bodyparser')    //
//#######################################################################################
//TODO
//yarn add koa koa-router koa-bodyparser query-string mongoose --save


router.get('/app',(ctx)=>{
    console.log(`하희!`)
    ctx.body = '<h1>앵무새</h1>'
})

router.post('/app',(ctx)=>{
    console.log(`ㅎㅇㅎㅇ`,ctx.request.body);
    //const {name , age} = ctx.request.body
})
router.get('/bpp/:',(ctx)=>{
    console.log(`하희!`)
    ctx.body = '<h1>앵무새</h1>'
})
router.get('/',(ctx)=>{
    ctx.body = '<h1>하희!</h1>'
    console.log(`하희5555!`)
})
router.get(`/cpp?&`,(ctx)=>{
    console.log(`cpppppppppp`);
    ctx.body = '<h1>하희!</h1>'
})
router.get(`/dpp`,(ctx)=>{
    console.log(`cpppppppppp`);
    console.log(ctx.query);
    // axios.get(`/dpp`,{
    //     params : {
    //       name : '홍길덩',
    //       age : 30
    //     }
    //   })
    //이렇게 보내면 ctx.query로 받음
    console.log(ctx)
    ctx.body = '<h1>하희!</h1>'
    
})

router.get(`/epp`,(ctx)=>{
    console.log(ctx.query);
    console.log(`ㅎㅇㅎㅇ`);
    //ctx.body = 'asdf'//서버의답장쓰
})
router.get(`/fpp`,(ctx)=>{
    console.log(ctx.query);
    console.log(`fpp`);
    ctx.body = '<h1>gd</h1>'
    console.log(ctx.request);
    
})

router.post('/post1',(ctx)=>{
    console.log(`post1`);
    //console.log(ctx);
    console.log(ctx.request.body)
    ctx.body = 'asdf'
})

router.post('/post2',(ctx)=>{
    console.log(`post2`);
    //console.log(ctx);
    console.log(ctx)
    console.log(ctx.request.body)
    ctx.body = 'asdf'
    console.log(ctx);
    
})



//#######################################################################################
app.use(bodyParser())       //body이거 제일 위로 올려라아아악!
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(4000,()=>{
    console.log(`port 4000 listen 깔깔히히`)
    
    
})

