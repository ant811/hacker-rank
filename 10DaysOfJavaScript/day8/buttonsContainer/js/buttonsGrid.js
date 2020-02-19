let button5 = document.getElementById('btn5');

let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');
let button4 = document.getElementById('btn4');
let button6 = document.getElementById('btn6');
let button7 = document.getElementById('btn7');
let button8 = document.getElementById('btn8');
let button9 = document.getElementById('btn9');

button5.addEventListener('click', ()=> {
  let temp = button1.innerHTML;
  button1.innerHTML = button4.innerHTML;
  button4.innerHTML = button7.innerHTML;
  button7.innerHTML = button8.innerHTML;
  button8.innerHTML = button9.innerHTML;
  button9.innerHTML = button6.innerHTML;
  button6.innerHTML = button3.innerHTML;
  button3.innerHTML = button2.innerHTML;
  button2.innerHTML = temp;
});