//exam1
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
console.log(`javascript`); //log snippets
//웹에서는 alert를 쓴다.
//log : 디버깅 용도
//alert : 경고창

console.log(`4asdfasdfasdf`);

console.log(`호랑이`+100);//결과적으로 문자열이다. 문제가 발생할 수 있다.
console.log(`호랑이`,100);//사이에 스페이스바가 찍힌다.

console.log(1,`asdf`);//식별자 : 어떤 것이 먼저 실행되었는지 (실행순서 구분)
console.log(2,`qwer`);

console.log(`"히히",'헤헤'`); //걍 서로 교차해서 쓸 경우 가려 써라 근데 난 템플릿 문자열 쓸거임 BackTick ` `
 
//exam2
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var a = 10; //타입 선언쓰. 자동 숫자 타입 변환된다.
//int b = 20; //처음 부터 int type이 없다.
//js는 변수선언이 총 3개이다
let b = 20;
const c = 30;   //이거 3개 말고는 볼 일이 없다.
//let을 값 변경 가능하다. 일반적으로 많이씀.. but const가 더많이써!
//const는 값을 넣고나면 변경이 불가이다.
a = 40;
b = 50;
//c = 60;//이거 안됨
console.log(a,b,c);

//exam3
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let a1 = 10;
console.log(a1);
console.log(typeof(a1));//number
a1 = "냥냥";//동일한 타입으로 선언과 출력이 가능하다 일단 web에서는 된다.
console.log(a1);
//typeof는 겁나 많이 쓰니까 잘 알아둬라 짜샤
console.log(typeof a1);//string

 
 //exam4
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

console.log(typeof 10);         //number
console.log(typeof 'asedf');    //string
console.log(typeof true);       //boolean
let a2 ;
console.log(typeof a2);          //undefined //해석을 몬하게따
let b2 = new Date();
console.log(b2,typeof b2);        //now Date / object //해석을 몬하게따
let c2 = []                      //배열 = object(class만들어버림)
console.log(c2,typeof c2)         //[] object
let d2 = {};
console.log(d2,typeof d2)         //{} object // {} : 이거는 !무조건! 객체
let apple = {
    a : 10,
    b : "야옹",  
    c : true,
    d : {                       //객체 안에 객체
        e : 20,
    },              
    f : function(){
        console.log(30);
        
    },                          //여기까지라도 마지막에 콤마를 넣는 습관을 들여라. 다음에 들어와도 편하다
};
console.log(apple.a,apple.b,apple.d.e);
apple.f();

let func = function(a, b){
    return a+b;
}
console.log(func,typeof func)       //function
console.log(func,typeof func())     //number : return type으로 나온다.
*/
//exam5
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
let a = 10;
console.log(a+10); //20
let b = String(a);
console.log(b+10);//문자열끼리 더해짐 1010

console.log(typeof b);
console.log(typeof Number(b));
console.log(typeof parseInt(b));
console.log(typeof parseFloat(b));
*/
//exam6
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
let n = new Date();
console.log(n.getFullYear(),n.getMonth()+1,n.getDate(),n.getDay(),n.getHours(),n.getMinutes(),n.getSeconds());
console.log(`${n.getFullYear()}년 ${n.getMonth()+1}월 ${n.getDate()}일 ${n.getDay()}요일 ${n.getHours()}시 ${n.getMinutes()}분 ${n.getSeconds()}초`);
*/
//exam7
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
let obj = {
    a : 10,
    b : `Stirng`,
    c : true,
};
console.log(obj.a,obj.b,obj.c);
console.log(obj['a'],obj['b'],obj['c']);    //배열처럼 json key까듯
//둘다 자주쓴다.
for (let item in obj){
    console.log(item);  //key가 나옴
    console.log(obj[item]); //값이 나옴
}
*/
//exam8
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
let ar = [10, 'hihi', true,{}];//배열 객체(서로 다른 타입, 온갖 객체 다 가능)
for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}
for(let item in ar){
    console.log(item);          //index
    console.log(ar[item]);      //value
}
ar.forEach((v,k)=>{    //살찐 애로우 (value, key) => 
    console.log(k,v);
});
*/

//exam9
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
let a = 10 ;
let b = `20`;
console.log(a == b);    //false
b = `10`;
console.log(a == b);    //같냐고 물을때 ==이거 잘안쓴다.(내용물이 같냐고 물어봄) true
console.log(a === b);   //값과 타입이 같냐고 물어봄 false
*/

//exam10
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
let a=10, b =20 ;
let c = (a === b)? true:false;
console.log(c);                     //false
*/

//exam11
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//let ar =[10,20,30,40];
// ar.forEach((v,k)=>{
//     console.log(k, v);
// });
//console.log(ar[3]);
//exam12
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let str = '';//문자열
// str += '똨키';
// console.log(str);
// str+='   ';
// str+='꼬부꼬북';
// console.log(str);
// str+='\n';
// str+='어흥';
// console.log(str);
//exam12
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
process.stdout.write("별찍끼 할꾸얀");

let num = 5;
const star = `*`;
const space = ' ';

let temp = '';
console.log();
for(let i = -2;i <= 2;i++){
    for (let j = -2; j <= 2; j++) {
        temp += (j!=0 && i!=0&&Math.abs(i)!=Math.abs(j)&j-i!=0) ? space:star;     
    }
    console.log(temp);
    temp = '';
}
// 
//exam12
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
