//잡 문법
// let fun1 = ()=>{
//     console.log(1);
    
// }

// fun1()
// fun1 =()=>{
//     console.log(2);
// }
// fun1()
// const fun2 = ()=>{
//     console.log(1);
    
// }

// fun2()
// fun2 =()=>{
//     console.log(2);
// }
// fun2()

// fun01()
// function fun01() {                  // 1
//     console.log("function 1")
// }

// let fun02 = function () {           // 2
//     console.log("function 2")
// }
// fun02()

// const fun03 = () => {               // 3
//     console.log("function 3")
// }
// fun03()

// const obj = {
//     f4:()=>{

//     },
//     f5:function*(){

//     },
// }

//class Apple{
    //클래스내에서 함수를 만들수있는것 2, 3
    //클래스내에서 함수를 만들때 function을 안만든다.
    // func1() {                  // 1
    //     console.log("apple 1")
    // }
    // func2 = function () {           // 2
    //     console.log("apple 2")
    // }
    
    // func3 =()=>{
    //     console.log("apple 3")
    // }
    //리액트에서는 이 문법이 성립한다
    //javascript에서 ES6의 문법이 완벽하게 되지 모태따
    //공식문법이 안되가지고 리액트에서만 사용한다.
    //조만간 공식 문법이 된당~
//}

//const apple = new Apple();
//apple.func1();
//apple.func2();
//apple.func3();

//prompt();

// const func01= ()=>{
//     console.log(`func1`);//여기서 argument못씀
// }
// function func02(){
//     console.log(`func1`,arguments); //arg = 객체 그냥 function에만 argument쓸수있음
// }
//가변인수의 전달이 있을 경우에는
//예약된 객체가 있다.
//argument
//func01(10,20)
//func02()


//console.log(arguments)//루핑 문장출력
// for(let item in arguments){
//     console.log(arguments[item]);
// }

// arguments.forEach(v => {
//     console.log(v);
// });


// console.log(Math.abs(-5));
// console.log(Math.sqrt(2));          //루트
// console.log(Math.max(10,60));
// console.log(Math.min(10,60));
//다른 수학함수가 필요하다면 알아서 찾아쓰라

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

setTimeout(()=>{        //일반적으로 비동기 non blocking 함수라고 말한다.
    console.log(`3`);//3초 후 실행
},3000)//[][초]
console.log(`쨘`);

//block : 함수가 진행되지 못함 (잡혀잇음)
//non blocking : 함수가 진행되긴함 (안잡혀있음)

//함수를 실행시킨 주체가 마지막까지 실행을하는지 안하는지 확인 y/n ?
//동기 : 툭 던지고 확인함 (물어봄)
//비동기 : 툭던지고 확인 안함 (ex. settimeout)

/*
조합 4가지를 다 많이 사용한다.


비동기 함수를 동기화시킨다 ? -> 원래는 확인안하는 함수였는데 내가 코드를 함수로 감싸서 최종확인 하게따


*/


// let obj = {
//     a:12,
//     b:`asdf`,
// }

// console.log(obj.a,obj.b);
// console.log(obj['a'],obj['b']);
// console.log(`------------`);

// with(obj){      //이게 머지? -> 여기서부터는 obj를 생략해서 사용해라
//     console.log(a,b);
// }

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



let obj = {
    name:`길똥`,
    age:100,
}

// let name = obj.name
// let age = obj.age

//ES6 추가된 문법 : 비구조화 할당 (현재 많이 사용중! )

const { name, age }  = obj //obj에 있는 필드명과 동일한 놈은 담아진다 전역변수이름으로 사용할수있다. 순서 상관없다

//console.log(name,age);      //몇개만 뽑아와서 쓸수이따

function func1(obj){
    const {name,age} = obj
    console.log(`hihi`,name, age);
    
}
func1(obj)

const ar = [10,20,30,40]

const [t1,t2,t3] = ar
console.log(t1,t2,t3);


console.log();
