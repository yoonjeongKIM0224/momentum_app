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

const link = document.querySelector('a');

console.log(link)



function onLoginSubmit (e){ //event object를 argument로 주고 있음.
    e.preventDefault(); //기본동작 막기
    const userName = loginInput.value;

    console.log(userName);
}

function handleLinkClick (e){
    e.preventDefault();
    console.log(e);
}

// submit: 엔터를 누르거나 버튼을 클릭할 때 발생
loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', handleLinkClick);

