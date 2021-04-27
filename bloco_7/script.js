const butao = document.querySelector('#button');
const contadoor = document.querySelector('#click-count');
let clickCount = 0;

contadoor.innerText = 'oi'

butao.addEventListener('click', ()=> {
    clickCount += 1;
    contadoor.innerText =clickCount.toString();
})