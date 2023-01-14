/*
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

const loginButton = document.querySelector('#login-form button');
*/

/*
유효성 검사
if(userName === ''){ //빈값일 경우
    alert('please write your name.');
} else if(userName.length > 15) { //글자가 15를 초과할 경우
    alert('Your name is too long.');
}
*/


const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// string만 포함된 변수는 대문자로 표기하는 관습
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';

// form 값 입력 시 함수
function onLoginSubmit (e){ //event object를 argument로 주고 있음.
    e.preventDefault(); //기본동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME); // form을 숨김
    const userName = loginInput.value; // 유저의 이름 저장
    greetingOpen(userName);
    
    // 브라우저에서 뭔가를 기억할 수 있게 해주는 기능(localStorage)
    localStorage.setItem(USERNAME_KEY, userName); //key, value
}

function paintGreeting (userName){
    greeting.innerText = `Hello ${userName}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/* -------------------- */
const savedUserName = localStorage.getItem('userName');

// localStorage가 비어있으면 form을 보여주되, 정보가 있으면 form을 숨김
if(savedUserName === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    // submit: 엔터를 누르거나 버튼을 클릭할 때 발생
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    //show the greetings
    paintGreeting(savedUserName);
}



/* 
const link = document.querySelector('a');

function handleLinkClick (e){
    e.preventDefault();
    console.log(e);
}
link.addEventListener('click', handleLinkClick);
*/

