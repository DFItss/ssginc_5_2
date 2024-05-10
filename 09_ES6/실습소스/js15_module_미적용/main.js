//main.js

// 1. 정의
let num = 10;
const SIZE = 20;
function fun(){
    console.log("fun");
}
function fun2(){
    console.log("fun2");
}
class Person{
    getMesg(){
        return "getMesg";
    }
}
//2. 사용
console.log("num:", num);
console.log("SIZE:", SIZE);
console.log("fun():");
fun();
console.log("fun2():");
fun2();

var p = new Person();
console.log("getMesg():", p.getMesg());