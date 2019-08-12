//exam 1
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
function fun1(){
    console.log("1");
}
function fun1(a){
    console.log("2");
}
function fun1(a,b){
    console.log("3");
}                       //가장 마지막에있는것만 살아남는다. 위에잇는 함수 무시

fun1()
fun1(10)
fun1(10,20)
*/
//exam 2
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
function fun1(a,b){
    console.log(a,b)
}

fun1()          //undefined undefined       default call
fun1(10)        //10 undefined
fun1(10,20)     //10 20
fun1(10,20,30)  //10 20 기본적으로 잘못된 코드이지만 문법적으로 문제없는 것 처럼 보인다.

function fun2(a = 10,b,c=99){
    console.log(a,b,c)
}

fun2()          //10 undefined 99           default call
fun2(20,30,40)  //20 30 40

function fun3(f = ()=>console.log(`bye!`)) {          //f는 함수
    f()
}

fun3(()=>console.log(`hi!`))    //function 객체를 넘겨줘야댐 익명함수가 아닐 경우에는!
fun3()                          //default call
*/
//exam 3
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
function fun4(f){
    console.log(`받은 f는 ${typeof f}`);
}

function fun5(){
    console.log(`fun5 call`);
}
function fun6(){
    return 100
}
fun4(fun5)              //함수 코드 자체를 넘기는 것.
console.log(`-------`);
fun4(fun5())            //괄호안에 fun5를 call시키는 것 (return 값을 부름) 인수 전달이 없는 거랑 같다. 
                        //(문법적으로 문제는 없지만 해석이 달라짐)
                        //함수의 실행은 안에서부터 밖으로 빠져나간다.
console.log(`-------`);
fun4(fun6())
console.log(`-------`);
console.log(`${typeof fun6}하고 ${typeof fun6()}하고는 다르다`);
*/

//exam 4
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*

function fun7(){
    return {}       //object 리턴
}
function fun8(){
    return fun7     //함수를 리턴하고
}
function fun9(){
    return fun7()   //함수의 리턴()를 리턴
}

console.log(`리턴을 보면 ${typeof fun8()}하고 ${typeof fun9()}는 다르다!`);

*/
//exam 5
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const obj = {
    a:10,
    b:20,
}
console.log(
    obj
);
obj.a=30
console.log(obj);

obj.c = 30          // c속성이 추가된다. = '객체의 동적 속성추가'라고 말한다.
//편하지만 위험(오타면 어쩔낀대1!!!!!!)
console.log(obj);

delete(obj.b)

console.log(obj);   //b삭제됨

obj = 30
console.log(obj);   //b삭제됨

obj['a'] = 40
*/

/*
const obj1 = {
    a:1,
    b:2,
    c:3,
}

//obj1 = {}
obj1.a = 10
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
console.log(obj1.a);
Object.freeze(obj1) //갱신 불가
Object.freeze(obj1)

function deepFreeze(obj){
    const props = Object.getOwnPropertyNames(obj)

    props.forEach((name)=>{
        const prop = obj[name]
        if(typeof prop == `object` && prop !== null){
            deepFreeze(prop)
        }
    })

    return Object.freeze(obj)
}

const user  = {
    name :`lee`,
    address : {
        city:`busan`,
        contry:`korea`
    },
}

deepFreeze(user)

user.name = `asdf`
user.address.city=`seoul`

console.log(user);
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//자기 객체 안에 들어있는 속성을 사용하고 싶을때는 this
/*
const obj0 = {
    name: `cat1`,
    age: 28,
    salary: 700,
}
const obj1 = {
    name: `cat2`,
    age: 21,
    salary: 200,
}
const obj2 = {
    name: `cat3`,
    age: 26,
    salary: 300,
}
const obj3 = {
    name: `cat4`,
    age: 22,
    salary: 400,
}
const obj4 = {
    name: `cat5`,
    age: 20,
    salary: 600,
}


const arr = []


arr.push(obj0)
arr.push(obj1)
arr.push(obj2)
arr.push(obj3)
arr.push(obj4)

for (let i = 0; i < arr.length; i++) {
    //with(arr[i]) {//arr[i]를 다빼도 된다.
        arr[i].getSum = function () {return this.age + this.salary;} //이거 람다식으로 하면 안된다. this가 제일 중요!!!!!!
        arr[i].sum = arr[i].getSum() //this를 이용하여 동적으로 만들어서
    //}
}

console.log(arr);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const obj = {
    a : 1000000000,
    f1:function (){
        console.log(this.a);    //this 변수사용
    },
    f2:function (){
        this.f1()               //this 함수접근
    },
}

obj.f2()  //출력 코드 아니고 f2()를 부르고 그안에 있는 f1()을 불렀당~~!!!

*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const obj = {
    a: 10,
    b: 20,
    f1: function () {
        console.log(1)
    },
    f2: function () {
        console.log(2)
    },
}

//이런 객체를 만들어주는 함수를 만드는 건어떠냐
function func (a,b){
    return {
        a:a,
        b:b,
        f1:function(){
            return this.a+this.b
        },
        f2:function(){
            return this.b-this.a
        },
    }
}

const ar = []

ar.push(func(10,50))
ar.push(func(20,50))
ar.push(func(30,50))
ar.push(func(40,50))

console.log(ar[0].f1());
console.log(ar[0].f2());
console.log(`----`);
console.log(ar[1].f1());
console.log(ar[1].f2());
console.log(`----`);
console.log(ar[2].f1());
console.log(ar[2].f2());
console.log(`----`);
console.log(ar[3].f1());
console.log(ar[3].f2());

//console.log(func(12,5));
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const ar = [-3,-4,1,2]

console.log(ar.length);//요소의 개수
ar.sort() //sort해줌
console.log(ar);

ar.sort((a,b)=> {
    return b-a              //a-b
})                          //거꾸롱 이렇게 쓸수도 이따 : 기준바꾸기

console.log(ar);

ar.sort((a,b)=>{
    let x = Math.abs(a)
    let y = Math.abs(b)
    return x-y
})

console.log(ar);

*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const ar = [{n:`kim`,a:10},{n:`pack`,a:5},{n:`cheon`,a:15}]

ar.sort((obj1,obj2)=>{
    return obj1.a-obj2.a
})
console.log(ar);        //sort됨

// ar.sort((obj1,obj2)=>{
//     return obj2.n-obj1.n
// })

console.log(ar);
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const dog = {name:`강아지` ,korean: 10,english:20, math:30, }
const cat = {name:`고양이` ,korean: 40,english:50, math:60, }
const tut = {name:`거북이` ,korean: 70,english:80, math:90, }

const arr = [dog, cat , tut]

for (let i = 0; i< arr.length; i++) {
  arr[i].getTotal =function(){return this.korean+this.english+this.math}
  arr[i].total = arr[i].getTotal()
 }

 console.log(`------------------total`);
 arr.sort((obj1,obj2)=>{            //total순
     return obj2.total-obj1.total
 })
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].total);
}
console.log(`------------------math`);

arr.sort((obj1,obj2)=>{            //math
    return obj2.math-obj1.math
})
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].math);
}
console.log(`------------------kor`);
arr.sort((obj1,obj2)=>{            //kor
    return obj2.korean-obj1.korean
})
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].korean);
}
console.log(`------------------eng`);

arr.sort((obj1,obj2)=>{            //eng
    return obj2.english-obj1.english
})
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].english);   
}
*/
//객체 리턴 함수
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function makeObject(name,kor,eng){
    return {
        name:name,
        kor:kor,
        eng:eng,
        getTotal:function(){
            return this.kor+this.eng
        },
        outPut:function(){
            console.log(this.name,this.kor,this.eng,this.getTotal())
        }
    }
}

const arr = []

arr.push(makeObject('dog',67,5))
arr.push(makeObject('cat',23,6))
arr.push(makeObject('tut',86,4))
arr.push(makeObject('miu',34,1))
arr.push(makeObject('eit',12,2))

//console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     arr[i].outPut()
// }

arr.sort((o1,o2)=>{
    return o1.getTotal()-o2.getTotal()
})

for (let i = 0; i < arr.length; i++) {
    arr[i].outPut()
}

arr.sort((o1,o2)=>{
    return o2.eng-o1.eng
})
for (let i = 0; i < arr.length; i++) {
    arr[i].outPut()
}
console.log(`------------------------------------`);


//생성자 함수
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function ff(name,kor,eng){ //객체를 만들어준다  = 생성자함수 가 선호된다 함수를 new를해서 call한다? 그럼 생성자 함수
    this.name = name
    this.kor = kor
    this.eng = eng
    this.getTotal=function(){
        return this.kor+this.eng
    }
    this.outPut = function (){
        console.log(this.name,this.kor,this.eng,this.getTotal())
        
    }
}

//const obj8 = new ff(`cat`,30,20)
//console.log(obj8);//function객체가 나타남
const ar = []

ar.push(new ff(`cat1`,3,36))
ar.push(new ff(`cat2`,5,29))
ar.push(new ff(`cat3`,4,67))
ar.push(new ff(`cat4`,1,85))
ar.push(new ff(`cat5`,8,85))
ar.push(new ff(`cat6`,7,54))
ar.push(new ff(`cat7`,6,82))
ar.push(new ff(`cat8`,2,45))

ar.sort((o1,o2)=>{
    return o2.kor-o1.kor
})

for (let i = 0; i < ar.length; i++) {
    ar[i].outPut()   
    //console.log(ar[i]);
}


