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
const function01= (a,b,c)=>({
    name : a,
    age: b,
    job:c,
})
console.log(
function01(`hello`,12,`student`)
)
   