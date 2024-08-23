// <JS 동작 방식>
//step 1. element를 찾아라
//step 2. event를 listen해라
//step 3. 해당 listen에 react해라

// 00. Document object
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

// 01. HTML in javascript
/*
const title = document.getElementById("something");    //document는 website를 의미함.
title.innerText= "Got you!";         //title element의 innerText를 Got you!로 바꿈.
console.log(title.className);

//getElementById() : HTML의 id를 통해 element를 찾아줌. > element를 찾으면 JS로 해당 HTML의 무엇이든 변경 가능함.
*/

// 02. Searching for elements - css selector
/*
//getElmentsByClassName : class hello에서 element들의 array반환
const test0 = document.getElementsByClassName("hello");
const test1 = document.getElementsByTagName("h1");

//querySelector : CSS selector를 사용하여 검색 가능.
const title0 = document.querySelector(".hello h1:first-child"); //1번째로 검색된 element만 반환
const title1 = document.querySelector(".hello h1");             //class hello에서 h1 요소 가져옴.

//querySelectorAll : selector 안의 조건에 부합하는 모든 element 가져다 줌.
const title2 = document.querySelectorAll(".hello h1");          //3개의 h1이 들어있는 array를 가져다줌.

//getElementById & querySelector >> 중요!
const test2 = document.getElementById("hello2");     //id를 찾고 있음을 알고 있음.
const title3 = document.querySelector("#hello2");    //위 코드와 동일한 코드
//querySelector에서는 무엇을 검색하는지 명확하지 않으므로 id(#)라고 명시.
//querySelecotr("#hello form");

console.log(test0);
console.log(test1);

console.log(title0);
console.log(title1);
console.log(title2);

console.log(test2);
console.log(title3);

*/

// 03. Events - Mouse
/*
const title = document.querySelector("div.mouse:first-child h1");

//기본적으로 object로 표시한 element를 보여줌.
console.dir(title);     //object들 중 property 이름 앞에 on -> event listener

function handleTitleClick() {       //title 클릭 시, blue 색상으로 title이 변경되는 함수
    title.style.color  = "blue";    //js로 css 조작
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

//click event가 진행되면 handleTitleClick 함수가 동작함. title 클릭 시 실행.
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);  //마우스가 title에 있을 때
title.addEventListener("mouseleave",handleMouseLeave);  //마우스가 title에 없을 때
*/

// 04. Events2 - Window
/*
const h1 = document.querySelector("div.mouse:first-child h1");

console.dir(h1);

function handleTitleClick() {
    h1.style.color  = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){  //페이지 크기 변경되면 bacgroundColor 변경되는 함수
    document.body.style.backgroundColor = "tomato"; 
    //body 부분 중요
    //h1처럼 document 밑으로 가져올 수 없음.
}

function handleWindowCopy(){    //ctrl+c 하면 문구 뜨는 함수
    alert("copier");
}

function handleWindowOffline(){ //WIFI 연결 끊김
    alert("SOS no WIFI");
}

function handleWindowOnline(){  //WIFI 연결됨
    alert("ALL GOOD!");
}

h1.addEventListener("click", handleTitleClick);
// 같은 표현 : title.onclick = handleTitleClick;
h1.addEventListener("mouseenter",handleMouseEnter);
// 같은 표현 : title.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave",handleMouseLeave);
//addEventListener를 이용하면 .removeEventListener롤 통해 event listener 제거 가능

//Page Size Event
window.addEventListener("resize", handleWindowResize);
//Clipboard events
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online",handleWindowOnline);
*/

// 05. CSS in JS 1 - title color change
/*
const h1 = document.querySelector("div.mouse:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;    //const > 값 변경 불가능
    let newColor;                           //let > 값 변경 가능
    if(currentColor === "blue"){    //현재 색상이 blue라면 red 변경
        newColor = "red";
    } else {                        //아니면 blue
        newColor = "blue";
    }
    h1.style.color = newColor;      //바뀐 색상 newColor를 h1.style.color에 적용.
}

h1.addEventListener("click", handleTitleClick);
*/

// 06. CSS in JS 2 - title clicked, title 변경
/*
const h1 = document.querySelector("div.mouse:first-child h1");

function handleTitleClick() {
    //h1.className은 getter이면서 setter이다.
    //h1.className = "clicked";    //css class 이름 h1.className에 넘겨줄 인자 이름이 같아야 작동함.
    const clickedClass = "clicked"; //css의 clicked를 clickedClass 변수로 지정.
    if(h1.className === clickedClass) {     
        h1.className = "";          //h1의 className을 비움.
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
*/

// 07. CSS in JS 3 - toggle
/*
const h1 = document.querySelector("div.mouse:first-child h1");

//contains function : 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해줌.
//toggle function : class name이 존재하는지 확인.

//toggle : 토큰이 존재하면 제거하고 존재하지 않는다면 토큰을 추가한다.

function handleTitleClick() {
    const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)) {     
    //     h1.classList.remove(clickedClass);      //class 이름이 이미 있다면 toggle remove
    // } else {
    //     h1.classList.add(clickedClass);         //class 이름이 없으면 toggle add
    // }

    //위 코드와 같은 내용. 
    //h1.classList.toggle("clicked");
    h1.classList.toggle(clickedClass);  
    //toggle은 h1의 classList에 clicked class가 이미 있는지 확인 후,
    //만약 존재하면 clicked 제거. 존재하지 않으면 clicked 생성
}

h1.addEventListener("click", handleTitleClick);
*/
