

function Apple (){      //생성자 함수를 작성한다 = 겉으로는 첫글자 대문자
    this.a = 10
}
function Banana () {
    this.b = 20
}

Banana.prototype = new Apple()           //상속관계를 만들어주는 문법
Banana.prototype.constructor = Banana    //둘을 엮는 문법쓰

const obj = new Banana()

console.log(obj.a,obj.b);

console.log(obj);


//############################################################################


function Mother (){      //생성자 함수를 작성한다 = 겉으로는 첫글자 대문자
    this.query = {
        name : 'ryeom',
        age : 10000
    }
}
function Child  () {
    this.response = {
        x :10,
        y :20,
    }
}

Child.prototype = new Mother()           //상속관계를 만들어주는 문법
Child.prototype.constructor = Child    //둘을 엮는 문법쓰

const ctx = new Child()

console.log(ctx.query,ctx.response);

console.log(ctx);
