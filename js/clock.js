// intervals: 매번 일어나야 하는 무언가 
// timeout: N시간 뒤에 한 번

const clock = document.querySelector('h2#clock');


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000) //1초

// 만약에 길이가 2가 되지 않는다면 앞쪽에 0을 추가한다 