const obj1 = {
    a:10,
    b:20,
}

const obj2 = {
    ...obj1,
    c:30,

}


console.log(obj2);

const obj3 ={
    a:10,
    b:20,
    a:30,
}

console.log(obj3);

const obj4={
    ...obj1,
    b:99,
}
console.log(obj4);

