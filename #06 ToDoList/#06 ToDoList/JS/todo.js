const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){     //x버튼 누를 시 todo 제거됨
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //parseInt로 문자열을 숫자로 바꿈.
    saveToDos();    //localStorage에 filter로 지운 요소 제외하고 배열들 새로 저장.
    //.filter()함수는 DB와 함께 실행. li.id와 다른 toDo는 남긴다.
}

function paintTodo(newToDo){        //Object를 매개변수로 받음.
    const li = document.createElement("li");
    li.id = newToDo.id;

    const span = document.createElement("span");
    span.innerText = newToDo.text;  //Object중 text 띄움

    const button = document.createElement("button");
    button.innerText = "❌";

    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);   //todo list 추가
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {    //text: id: 형태로 todo 저장
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //toDos Array에 newTodo 추가됨.
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("TODOS_KEY");

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.array.forEach(paintTodo);
    //forEach() : paintToDo를 parsedToDos 배열의 요소마다 실행.
}

//filter : 지우고 집은 요소 제외한 "새로운 배열" 형성

function Filter(item) {
    return item <= 3;
}

toDos.filter(Filter);
