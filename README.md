# JS-Chrome-App
JS 크롬 앱 만들기

## #01 Basic 
- 기초 js 문법 정리

## #02 JavaScript on Browser
- Event 처리

## #03 Login
- localStorage를 이용한 Login 구현
  - localStorage : 브라우저가 가지고 있는 작은 DB같은 API
<실행 화면> 
<br>

### 로그인 전
<br>
- localStorage 상태

![image](https://github.com/user-attachments/assets/446756cd-93d9-4e7f-93df-8f553e6213e1)
- 페이지 상태
![image](https://github.com/user-attachments/assets/79e75c3c-cbdd-428a-b653-588de309332d)
<br>

### 로그인 입력
<br>

- 페이지 상태

![image](https://github.com/user-attachments/assets/541e11da-88fc-4310-8cae-f87f100aebe6)
<br>

### 로그인 후
<br>

- localStorage 상태

![image](https://github.com/user-attachments/assets/aa5fe4dd-06ea-4345-8d5e-ee5762f02bdf)

- 페이지 상태

![image](https://github.com/user-attachments/assets/b6342cd4-9d84-4586-aae4-410776e40cdc)
<br>
## #04 Clock
- 지정된 시간마다 fuction를 반복적으로 호출하거나 code snippet(코드 조각)을 실행하는 setInterval 함수와 
현재 시간을 시, 분, 초로 나타내는 getClock 함수를 이용하여 시계 구현

## #05 Quotes & Background
- Math 함수들(floor():하한, random() : 랜덤 함수) 이용하여 랜덤 명언, 이미지 띄움.
- document.createElement("img");     &emsp;//img : html tag 자리에 img 경로 넣어줌.
- document.body.append(bgImage);     &emsp;//웹사이트 가장 아래에 이미지 띄움.
- document.body.prepend(bgImage);    &emsp;//웹사이트 가장 위에 이미지 띄움.

## #06 To do List
- localStorage를 이용한 toDoList 삽입, 삭제 구현
- .filter() 함수로 toDos 배열 중 지우고 싶은 원소 제외한 새로운 배열을 형성,
- saveToDos()로 제외한 toDos의 새로운 배열 결과를 localStorage(DB)에도 적용.
```javascript echo
  function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }
```


## #07 Wheather
- OpenWheater를 이용한 현재 위치 날씨 정보 불러오기
