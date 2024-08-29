// # 05 Clock
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();                         //step1. 브라우저 기본 동작(페이지 새로고침) 멈춤.
    loginForm.classList.add(HIDDEN_CLASSNAME);      //step2. 이름 입력 form 숨기기
    const username = loginInput.value;              //step3. username 저장

    localStorage.setItem(USERNAME_KEY, username);   //step4. username value를 "username" key와 함께 localStorage에 저장.
    paintGreetings();                               //step5. paintGreetings function 호출.
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    paintGreetings();
}
