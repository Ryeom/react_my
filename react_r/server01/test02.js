const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

// app.use((ctx)=>{
//     ctx.body = '<h1>hello world</h1>'
//     console.log(`소나무`)
// })
router.get('/',(ctx)=>{
    ctx.body = '<h1>손널무</h1>'
    console.log(`손널무`)
})//기본 주소 입력하면 라우팅 여기로 하겠다


router.get('/app',(ctx)=>{
    ctx.body = '<h1>중널무</h1>'
    console.log(`중널무`)
})

router.get('/bpp/:name?',(ctx)=>{//물음표 붙이면 안넣을수도있다라는 말이됨쓰
    ctx.body = `<h1>댄널무</h1>${ctx.params.name}`
    console.log(ctx.params.name)
    const { name } = ctx.params
})
//http://localhost:4000/cpp/?name=홍길동&age=30
//http://localhost:4000/cpp/?name=%ED%98%B8%EA%B8%B0%EB%8F%84&age=30
//출력결과
//port 4000 listen 소나무
//씌쁴쁴
//호기도 30
router.get('/cpp',(ctx)=>{
    const { name , age } = ctx.query
    ctx.body = '<h1>씌쁴쁴</h1>' +name + age
    console.log(`씌쁴쁴`)
    console.log(name, age);
    
})
//http://localhost:4000/dpp/%EC%95%B5%EB%AD%87/?name=%EA%B0%B8%EC%95%84%EC%95%85&age=%EA%B0%B8%EC%95%84%EC%95%84%EC%95%85
//http://localhost:4000/dpp/앵무때/?name=갸아악&age=갸아아악
router.get('/dpp/:bird',(ctx)=>{
    ctx.body = '<h1>앵무새</h1>'
    console.log(`중널무`)
})


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.use(router.routes())
app.use(router.allowedMethods()) //메소드 사용하겠다.
app.listen(4000,()=>{
    console.log(`port 4000 listen 소나무`)
})

