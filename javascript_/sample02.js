//exam1 함수의 기본적인 모양꼴
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
fun01() //얘는 호이스팅 가능해서 함수를 위아래로 쓸수있다
function fun01() {
    console.log("function 1")
}

//fun02()     //얘는 호이스팅불가해서 선언해야 사용할 수 있다.
let fun02 = function () {
    console.log("function 2")
}
fun02()

const fun03 = () => { //함수는 거의 수정해서 사용하지 않으므로 const를 붙인다.
    console.log("function 3")
}
fun03()
// practice
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function one(){
    console.log("one");
    
}
one()
const two = function (){
    console.log("two");
    
}
two()
const three = ()=>{
    console.log("three");
}
three()
*/
// exam3
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//인수전달 없고 리턴이 없다.
/*
function fun01() {
    console.log(
        "func01"
    )
}
fun01()
//function fun02(let a,b){ //이렇게 하면 에러뜬당
//인수전달 있고 리턴이 없다.
function fun02(a, b) {
    console.log(
        `func02 ${a} / ${b}`
    )
    console.log(`a type : ${typeof a} / b type : ${typeof b}`)
}
fun02(10, `냥`)
//인수 전달 없고 리턴값 있음
function fun03() {      //리턴값이 있는지 없는지 알수 없다.
    console.log(`fun3 ^^7`)
    return 100
}
let num = fun03()
console.log(num)            //call 하는 법
console.log(fun03())



// exam 2
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function fun4(n,s){
    return n + s
}

console.log(fun4(10,20));
console.log(fun4(10,`야옹`));
*/

// exam 3
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const fun1 = () => { //f
    console.log(`fun1`)
}
fun1()

const fun2 = (n, s) => {
    console.log(n, s)
}
fun2(`hi1`, `hi2`)
const fun3 = () => {
    return 12
}

const fun4 = (n, s) => {
    return n, s
}
*/
// exam 4
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const f1 = num => { //인수 전달 한개일때 괄호 생략가능!!!!!!!!!!!!!!!!!
    console.log(`f1`, num);
}
f1()
const f2 = () => 100; //{return 100;}이거다 스코프와 리턴이 함께 생략됨
//const f9999 = (a) => a*a; 
f2()
const f3 = num => 100; //인수전달 (), 스코프와 리턴 생략~!
*/
// exam 5
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const f1 = () => {
    console.log(`f1`)
    let n = {
        a: 10,
        b: 20,
    }
    return n
}
const f2 = () => {
    console.log(`f2`)
    return {
        a: 10,
        b: 20,
    }
}
// const f3 = () => {   //이거 에러
//     a: 10,
//     b: 20,
// }
const f3 = () => ({     //이렇게 쓴다
    a: 10,
    b: 20,
})
const f3 = () => {      //이렇게 안쓴다.
    return ({
        a: 10,
        b: 20,
    })
}
const f3 = () => ({
    a: 10,
    b: 20,
})
// exam 6
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const fun1 = ()=>{
    console.log();      //디버깅용 log
    return ({
        
    })
}

*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const function01= (a,b,c)=>({
    name : a,
    age: b,
    job:c,
})
console.log(
function01(`hello`,12,`student`)
)
*/
//exam6
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const func1 =()=>{
    console.log(`func1`);
    const func1_2=()=>{
        console.log(`fun1_2`);
    }
    //func1_2() 함수에서 리턴되는 것을 리턴한다.
    //()없으면 함수의 코드를 리턴하게된다.
    return func1_2
}
func1()                     //리턴된 func1_2()는 던져진다
const f3 = func1()          //리턴된 func1_2를 받음
f3()
console.log(`---------`);

func1()() //이거는 연속콜 1번과 1_2를 함께불렀다.
*/
//exam7
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const func1 = ()=> {
    const func1_2 = (n,s) =>{
        console.log(n,s);
    }
    return func1_2  //얘를 해줘야 func1()(10,`냥`) 얘를 써먹을 수 있음.
}
func1()(10,`냥`)
*/
//exam7
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const fun1 = () => (() =>{

})
const fun2 = (n1) => ((n1,n2) =>{ 
    console.log(`${n1}하고 ${n2}를 출력`)
})
const fun3 = n1 => (n2 =>{               //생략쓰
    console.log(`${n1}하고 ${n2}를 출력`)
})
const fun3 = n1 => n2 =>{               //괄호를 생략
    console.log(`${n1}하고 ${n2}를 출력`)
}

const fun4 = n1 => n2 =>               //이거는 이거 자체의 코드가 리턴되어버리는 형태이다.
    console.log(`${n1}하고 ${n2}를 출력`)


fun2(10)(`String`)
fun3(10)(`String`)
fun4(10)(`String`)
console.log( typeof fun4(10)(`String`) );

*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const fun1 = ()=>{
//     const fun2 = ()=>{
//     }
// }
// const fun1 = (n1)=>{
//     const fun2 = (n2)=>{
//     }
// }
// const fun1 = (n1)=>{
//     return (n2)=>{

//     }
// }
// const fun1 =n1=>{
//     return n2=>{

//     }
// }
// const fun1 =n1=>{
//      n2=>{

//     }
// }
// const fun1 = n1=>{
//     return n2 =>{
//         console.log(`${n1}하고 ${n2}`); 
//     }
// }
//fun1(100)(2)


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let fun1 = function(){
//     let num = 10;           //지역변수라도 지역변수의 생명을 연장시켜준다 : 클로저 (함수안에서 함수가 제작될때)
//     let fun2  = function(){ //안에있는 함수가 밖에 있는 함수쓸때
//         let str = '냥냥'
//         console.log(num);
//         console.log(str);
//     }
//     return fun2
// }
// fun1()()
/* 함수간에 지역변수를 공유한다 : 클로저 */
//exam8
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
function fun1(f2) { //함수를 주끄다
    console.log(`fun2`);
    f2()
    fun4()()
}

const fun3 = () => {
    console.log(`func3`);
}

//로그를 출력할때 이렇게 쓴다
const fun4 = () => { //함수안에
    console.log(`fun4`);
    return () => { //리턴을 함수로
        console.log(`func4 =>()=>() call`)
    }
}



const fun5 = () => () => {
    console.log(`func5 call`)
}
const fun6 = n => {
    console.log(`fun4`);
    return (n, s) => ({ //객체 리턴시켜주는 ㅎ마수다
        
    })
}
const fun7 = n => {
    console.log(`fun4`);
    return (n, s) => ({
        a:10,
        b:`냥`,
        c:true,
        d: ()=>{
            
        },
        e:{

        },
    })
}

fun1(fun3)
fun1(() => { //함수를 바로전달
    console.log(`함수 바로 전달쓰`);
});

const obj = fun7(100)(200,`ss`)
console.log(obj);
*/
// let f1 = function (f2  = function () {}) 
// {
//     console.log("함수 1번입니다.");
//     //f2()
// }

// f1(() => {
//     console.log("호출입니다.");
// })

let f1 = function (f2 = function (a) {console.log(`---`,a);}) {//= function () {console.log(`---`);}(디폴트)
    console.log("함수 1번입니다.");
   f2(100)
}


const f3 = () => {
    console.log("함수 3번입니다.");
}
//f3()
//f1(f3)
f1(f3)//
console.log(`-----`);

f1(f3())
//f1()
// f1(() => {
//     console.log("호출입니다.");
// })


//함수의 인수로 함수를 갖다주는 것을 콜백함수라고 한다.
//원래는 운영체제가 함수를 던져주면 콜백함수인데
//자스에서는 저렇다.



function fun1(a = 20){      //디폴트값을 준거다
    console.log(a);
    
}
//fun1()