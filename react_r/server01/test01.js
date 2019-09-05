const Koa = require('koa')
const app = new Koa()

app.use((ctx)=>{
    ctx.body = '<h1>hello world</h1>'
    console.log(`냥냥쓰`)
})
app.listen(4000,()=>{
    console.log(`port 4000 listen ㅎㅇㅁ`)
})