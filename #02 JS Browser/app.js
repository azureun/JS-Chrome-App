// Document object
/*
//JS는 이미 html과 연결되어 있다.
//index.html에서 F12, Console 들어가서 document.title="제목" 적으면 자동으로 제목 내용으로 변경됨.

//document.location
//object들 어디에 위치하는지 띄워줌.

//console.dir()
//element 내용을 더 자세하게 보여줌.
const title = document.getElementById("title");
console.dir(title);
*/

// HTML in javascript

const title = document.getElementById("something");    //document는 website를 의미함.
title.innerText= "Got you!";         //title element의 innerText를 Got you!로 바꿈.
console.log(title.className);

//getElementById() : HTML의 id를 통해 element를 찾아줌. > element를 찾으면 JS로 해당 HTML의 무엇이든 변경 가능함.


// Searching for elements
/*
const hellos = document.getElementsByClassName("hello");
console.log(hellos);
*/

//Events
