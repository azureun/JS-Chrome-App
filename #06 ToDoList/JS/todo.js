const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];     //toDos는 항상 빈 array로 시작
//application 시작할 때 toDos Array는 비어 있으면 개속 새로 localStorage에 저장됨.

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function deleteToDo(event){
    const li = event.target.parentElement;
    //target은 클릭된 HTML element -> 1개 이상의 property 존재함 : parentElement
    //event.target은 X 버튼임.
    //이것의 부모인 li 태그 부분을 제거해야 X버튼 눌렀을 때 toDo 삭제됨.
    li.remove();
}

function paintTodo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";

    button.addEventListener("click",deleteToDo);

    li.appendChild(span);       //li 태그 안에 span 태그 추가
    li.appendChild(button);     //li 태그 안에 button 태그 추가
    toDoList.appendChild(li);   //toDoList 위치에 입력한 newToDo 추가
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";   //엔터하면 입력란 내용 사라짐.

    toDos.push(newToDo);
    paintTodo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem("TODOS_KEY");
// console.log(savedToDos);

// if(savedToDos !== null) {
//     const parsedToDos = JSON.parse(savedToDos);
//     console.log(parsedToDos);
//     parsedToDos.forEach(sayHello);
    
// }

//더 짧게
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos.forEach(paintTodo);

    console.log(parsedToDos);
    parsedToDos.forEach((item) => console.log("this is the turn of "+ item));
    //1. arrow function
    //2. 직접 function 만들기


}
