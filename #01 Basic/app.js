//Variables(let, const, var)
/*
//var은 언제든지 업데이트 가능한 변수 - 실수로 업데이트 해도 오류 뜨지 않음.
//기본적으로 const, 필요 시 let, 사용금지는 var

const a = 5, b = 2;     //상수 선언 - 값 변경 불가능
const myName1 = "kazu";
const veryLongVarName = 0;      //camelCase식으로 변수 선언

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + myName1);

//const and let
let myName2 = "kazu";    //변수 선언 - 값 변경 가능
myName2 = 'azureun';

console.log("your new name is " + myName2);
*/

//Boolean
/*
//true, false, undefined, null은 문자가 아니고 데이터 타입임.
const amIFat = null;    //null : 변수 안이 비어있음을 의도적으로 나타낸 것
let something           //undefined : 변수는 메모리에 의해 만들어졌고 컴퓨터가 인식하지만, 값이 없는 상태
console.log(something, amIFat);
*/

//Arrays
/*
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

const nonsens = [1,2,"hello", false, true, null, undefined, 'kazu'];

console.log(daysOfWeek);
console.log(nonsens);

//Get Item from Array
console.log("금요일은 " + daysOfWeek[4] + "입니다.");   
//출력할 땐 배열 개수 초과해서 사용하면 undefined

//Add one more day to the array
daysOfWeek.push("sun");     //배열 가장 끝에 sun이 추가됨
console.log(daysOfWeek);

const toBuy = ["potato","tomato","pizza"];
toBuy.push("kimbap");

*/

//Object
/*
const player = {
    //properties
    name : "kazu",
    points: 10,
    fat:true,

};
console.log(player);    //player 객체 전체 출력

console.log(player.name);       //name 출력
console.log(player["name"]);    //[] 안에 출력하고자 하는 변수 써줄 수도 있음

player.fat = false;     //true > false로 바꿈.
console.log(player);    //constant 안의 property를 업데이트하는 건 문제되지 않음.

//player = false;         //player의 const는 object이므로 전체를 하나의 값으로 업데이트 하려고 하면 에러

player.lastName = "potato";     //원하는 property 추가 가능.
player.point = 15;              //property 수정 가능.
player.point = player.point + 15;     //값 계산 가능.
console.log(player);
*/

//Functions
// : 반복 사용하는 코드 조각
/*
//argument : function 실행 동안 어떤 정보를 function에 전달함.
function sayHello(nameOfPerson, age) {      //function functionName (arguments) {}
    console.log("Hello my name is "+ nameOfPerson + " and I\'m 10 years old.");
}
function plus(a, b){
    console.log(a+b);
}

function divide(a,b){
    console.log(a/b);
}

sayHello('kazu',10);
plus(60 ,8);
divide(99,20);


const player = {
    name: "kazu",
    sayHello: function (otherPersonsName) {     //클래스 안에 있는 function
        console.log("Hello " + otherPersonsName + " nice to meet you!");
    },
};

console.log(player.name);
player.sayHello("azureun");
*/

//Recap
/*
//Variables & Boolean
const num = 5, isKazuFat = true;
let name = 'kazu';
var point = 10;
console.log(num, isKazuFat);        //5, true

const a = null;
let hello;
console.log(hello);                 //undefined

//Arrays
//배열 안에 아무 데이터 타입이나 넣을 수 있음
const days = [1,2,false, true, null, undefined, "text",num];

const toBuy = ["blueberry","pizza","chicken"];
console.log(toBuy);
toBuy[2] = "water";     //지정된 인덱스 수정
console.log(toBuy);
toBuy.push("meat");     //가장 뒤에 추가
console.log(toBuy);
*/
/*
//Object
const player ={
    name: 'kazu',
    age: 100,
};

console.log(player.name);
player.name = "azuruen";    //Object의 property 수정 가능
console.log(player.name);   
player.point = 15;          //Object 추가 가능
console.log(player);

//Functions
function plus(){
    console.log(2+2);
}
for(let i = 0; i < 3; i++) {
    plus();
}

function plus2(n1, n2) {
    console.log(n1 + n2);
}
plus2(100, 200);
plus2(1.2345,9898);
*/

//실습
/*
const calculator = {
    add: function (a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    multi: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    },

    power: function(a,b){
        return Math.pow(a,b);
    },
    squareRoot: function(c){
        return Math.sqrt(c);
    }
}

console.log(calculator.add(10,5));      //15
console.log(calculator.minus(10,5));    //5
console.log(calculator.multi(10,5));    //50
console.log(calculator.divide(10,5));   //2
console.log(calculator.power(2,5));     //32
console.log(calculator.squareRoot(64)); //8
*/

//Returns
/*
const calculator = {
    add: function (a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    multi: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    },

    power: function(a,b){
        return Math.pow(a,b);
    },
    squareRoot: function(c){
        return Math.sqrt(c);
    },
};

const plusResult = calculator.add(2,3);
console.log(plusResult);
const minusResult = calculator.minus(plusResult, 3);
const multiResult = calculator.multi(minusResult, 3);
const divideResult = calculator.divide(plusResult, minusResult);
*/

//Conditionals
/*
//function prompt(message?: string, _default?: string): string | null
// const age = prompt("How old are you?");     //사용자가 입력하길 기다림.

// //string type -> Int type
// console.log(typeof age, typeof parseInt(age));       //string number >> 각 타입 결과 출력

// //각 결과 출력
// console.log(age, parseInt(age));    //만약 age에 입력된 값이 숫자가 아니라면 parseInt는 NaN(Not a Number) 출력

const age = parseInt(prompt("How old are you?"));     //한번에 표현. 내부에서 외부로 실행.
console.log(age);
*/

//Conditional 2 - isNaN, if
/*
const age = parseInt(prompt("How old are you?"));
//isNaN : age값이 숫자 > return false 숫자가 아니면 > return true

if (isNaN(age)) {      //condition has to be a boolean
    //condition === true이면 NaN 이므로 아래 문장 실행
    console.log("Please write a number.");
} else {
    console.log("Thank you for writing your age.");
}
*/

//Conditional 3 - else if
/*
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number.");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {        //두 조건 true일 경우 실행
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise.");
} else if(age > 80) {
    console.log("You can do whatever you want.");
}

//true && true === true
//false && true === false
//true && false === false
//false && false === false

//true || true === true
//false || true === true
//true || false === true
//false || false === false
*/

//Recap
/*
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number.");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {        //두 조건 true일 경우 실행
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise.");
} else if (age === 100) {       //!== 100 이면 100이 아니라면 실행됨.
    console.log("wow you are wise");
} else if(age > 80) {
    console.log("You can do whatever you want.");
} 
*/
