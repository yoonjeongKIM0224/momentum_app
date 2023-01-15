//to do list
// submit의 기본 동작은 페이지를 새로고침하는 것

const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

function paintToDo(newToDo){ //newToDo: text
    // console.log('I will paint', newToDo);

    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.innerText = newToDo;
    button.innerText = '❌';
    li.appendChild(span); //li는 span이라는 자식을 갖게 됨.
    li.appendChild(button); //li는 button이라는 자식을 갖게 됨.
    toDoList.appendChild(li); //toDoList는 li라는 자식을 갖게 됨.

    button.addEventListener('click', deleteToDo);
}

function deleteToDo(event){
   const li = event.target.parentElement;
   li.remove();
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newToDo  = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
    toDoInput.value = ''; //submit되면 빈값 넣기.

    paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
