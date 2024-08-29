const clock = document.querySelector("h2#clock");

//Date Object
//: 호출하는 당시의 현재 날짜랑 시간 알려줌.
// 시, 분, 초 가져올 수 있음.

//시, 분, 초(Integer)를 String으로 감싸서 두 자리(00) 형식으로 출력
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");     //2자리 수가 아니면 앞에 0 붙임.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = (`${hours}:${minutes}:${seconds}`);   //h2 부분에 시간 띄우기
}

setInterval(getClock, 1000);    //1초마다 현재 시간 가져옴. 5000이면 5초마다 가져옴.
