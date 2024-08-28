// # 04 Login
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  //string만 포함된 경우 대문자 변수로 저장
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();                         //step1. 브라우저 기본 동작(페이지 새로고침) 멈춤.
    loginForm.classList.add(HIDDEN_CLASSNAME);      //step2. 이름 입력 form 숨기기
    const username = loginInput.value;              //step3. username 저장

    //localStorage : 브라우저가 가지고 있는 작은 DB같은 API
    //setItem("setItem", username)localStorage에 username 추가
    //localStorage.setItem(USERNAME_KEY, loginInput.value); //유저 정보 2번씩 찾을 필요 없이 나타낼 수 있음.
    localStorage.setItem(USERNAME_KEY, username);   //step4. username value를 "username" key와 함께 localStorage에 저장.
    paintGreetings();                               //step5. paintGreetings function 호출.
}

function paintGreetings(){          //사용자 환영 문구 나타내고, h1 요소로부터 "hidden" 클래스 제거함.
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}!`;      //h1 띄움.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//getItem() : 저장된 username 없으면 null 반환
const savedUserName = localStorage.getItem(USERNAME_KEY);      

if(savedUserName === null) {        //username 없으면 html의 form의 hidden class명을 지워줌. >> form의 submit을 기다림.
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);           //form 지우는 "hidden" 지워서 form 그대로 띄워둠.
    loginForm.addEventListener("submit", onLoginSubmit);    //username 입력하는 loginForm 띄움.

} else {
    //show greeting
    paintGreetings();
}
