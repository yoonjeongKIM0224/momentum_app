/*
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');
*/

/*
유효성 검사
if(userName === ''){ //빈값일 경우
    alert('please write your name.');
} else if(userName.length > 15) { //글자가 15를 초과할 경우
    alert('Your name is too long.');
}
*/


const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

function onLiginBtnClick (){
    const userName = loginInput.value;
}

loginButton.addEventListener('click', onLiginBtnClick);
